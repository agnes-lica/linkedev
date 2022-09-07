import { AxiosResponse } from "axios";
import { useState, ReactNode, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
//import { getLinkeDev } from "../../Services/LinkeDev";

interface IProviderChildren {
  children: ReactNode;
}

interface IVacancieProps {
  vacancieList: IVacancie[];
  setVacancieList: React.Dispatch<React.SetStateAction<IVacancie[]>>;
  vacancie: IVacancie | null;
  setVacancie: React.Dispatch<React.SetStateAction<IVacancie | null>>;
}

interface IVacancie {
  title: string;
  description: string;
  place: string;
  salary: number;
  level: string;
  stacks: string[];
  type: string;
  reputation: number;
  candidates: string[];
  userId: string;
  date: string;
}

export const VacancieContext = createContext<IVacancieProps>(
  {} as IVacancieProps
);
const VacancieProvider = ({ children }: IProviderChildren) => {
  const [vacancie, setVacancie] = useState<IVacancie | null>(null);
  const [vacancieList, setVacancieList] = useState<IVacancie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const token = window.localStorage.getItem("@linkeDev: UserToken");
  const id = window.localStorage.getItem("@linkeDev: UserID");
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    const getVacancieLists = async () => {
      await api
        .get("/jobs")
        .then((res: AxiosResponse) => {
          setVacancieList(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (vacancie) {
      getVacancieLists();
    }
  }, [vacancie]);

  return (
    <VacancieContext.Provider
      value={{
        vacancieList,
        setVacancieList,
        vacancie,
        setVacancie,
      }}
    >
      {children}
    </VacancieContext.Provider>
  );
};

export default VacancieProvider;
