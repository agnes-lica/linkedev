import { AxiosResponse } from "axios";
import { useState, ReactNode, createContext, useContext } from "react";
import api from "../../services/api";
import { IJob, IUser, UserContext } from "../User/UserContext";

export const DevContext = createContext({} as DevProviderData);

interface DevProps {
  children: ReactNode;
}

interface DevProviderData {
  dev: IUser | null;
  getDev: (id: string) => void;
  modalDevProfile: boolean;
  setModalDevProfile: React.Dispatch<React.SetStateAction<boolean>>;
  getModalDevProfile: (id: string) => void;
  getDevSubsList: () => Promise<void>;
  devSub: IJob[];
}

function DevProvider({ children }: DevProps) {
  const { user } = useContext(UserContext);

  const [dev, setDev] = useState<IUser | null>(null);
  const [modalDevProfile, setModalDevProfile] = useState<boolean>(false);
  const [devSub, setDevSub] = useState([]);

  async function getDev(id: string) {
    await api.get(`/users/${id}`).then((res) => {
      setDev(res.data);
    });
  }

  async function getModalDevProfile(id: string) {
    await getDev(id);
    setModalDevProfile(true);
  }

  const getDevSubsList = async () => {
    await api.get("/jobs").then((res: AxiosResponse) => {
      let devSubs = [];
      const devNewSubs = res.data.filter((job: IJob) => {
        const jobCandidate = job.candidates?.find((candidate: IUser) => {
          if (candidate.id === user?.id) {
            return true;
          }
        });
        if (jobCandidate) {
          return true;
        }
      });
      setDevSub(devNewSubs);
    });
    console.log(devSub);
  };

  return (
    <DevContext.Provider
      value={{
        dev,
        getDev,
        getModalDevProfile,
        modalDevProfile,
        setModalDevProfile,
        getDevSubsList,
        devSub,
      }}
    >
      {children}
    </DevContext.Provider>
  );
}

export default DevProvider;
