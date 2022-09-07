import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { DevContext } from "../Dev/DevContext";
import { UserContext } from "../User/UserContext";

export const JobsContext = createContext({} as JobsProviderData);

interface JobsProps {
  children: ReactNode;
}

interface JobsProviderData {
  getJob: (id: string) => void;
  job: JobData | null;
  getJobModal: (id: string) => void;
  modalJobDetail: boolean;
  setModalJobDetail: React.Dispatch<React.SetStateAction<boolean>>;
  jobList: JobData[] | null;
}

interface JobData {
  title: string;
  description: string;
  place: string;
  salary: string;
  level: string;
  stacks: string[];
  type: string;
  reputation: string;
  candidates: string[];
  userId: any;
  date: string;
  id: string;
}

function JobsProvider({ children }: JobsProps) {
  const [job, setJob] = useState<JobData | null>(null);
  const [jobList, setJobList] = useState<JobData[] | null>([]);
  const [modalJobDetail, setModalJobDetail] = useState(false);

  const { getDev } = useContext(DevContext);

  useEffect(() => {
    const getJobList = async () => {
      await api
        .get("jobs")
        .then((res) => {
          console.log(res);
          setJobList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getJobList();
  }, []);
  const { user } = useContext(UserContext);

  const getJob = (id: string) => {
    api.get(`jobs/${id}`).then((res) => {
      console.log(res);
      setJob(res.data);
    });
  };

  function getJobModal(id: string) {
    setModalJobDetail(true);
  }

  return (
    <JobsContext.Provider
      value={{
        job,
        getJob,
        getJobModal,
        modalJobDetail,
        setModalJobDetail,
        jobList,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export default JobsProvider;
