import { AxiosResponse } from "axios";
import React, { useState, ReactNode, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";


const toastSuccessAddTech = () => toast.success("Vaga cadastrada com sucesso!");
const toastErrorAddTech = () => toast.error("Verifique os dados incorretos!");

interface IUserProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<null | IUser>>;
  devList: IUser[];
  // editModalDev: IEditDev | null;
  // setEditModalDev: (editModalDev: IEditDev | null) => void;
  handleRegister: (data: IHandleRegister) => void;
  handleLogin: (data: IHandleLogin) => void;
  // editProfileDev: (data: IEditDev) => void;
  getRecruiterSubsList: () => void;
  getRecruiterJobsList: () => void;
  setTags: (tags: string[]) => void;
  addJob: (data: IJob) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  tags: string[];
  jobList: IJob[];
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<string>>;
  recruiterSubs: IUser[];
  filteredDevs: IUser[];
  setFilteredDevs: React.Dispatch<React.SetStateAction<IUser[]>>;
  setDevList: React.Dispatch<React.SetStateAction<IUser[]>>;
  searchFilter: (search: string) => void;
  getRecruiterDevsList: () => void;
  editProfileRecruiter: (data: IEditRecruiterForm) => void;
  modalEditRecruiter:IEditRecruiterForm | null;
  setModalEditRecruiter: (modalEditRecruiter: IEditRecruiterForm | null) => void;
  
}

export interface IUser {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  company?: string;
  social: string;
  avatar_URL: string;
  is_recruiter?: boolean;
  level?: string;
  stacks?: string[];
  bio?: string;
  title?: string;
}
export interface IEditRecruiterForm {
  name?: string;
  email?: string;
  company?:string;
  social?: string;
  avatar_URL?: string;
}

export interface IHandleRegister {
  name: string;
  email: string;
  password: string;
  company?: string;
  social?: string;
  avatar_URL?: string;
  is_recruiter?: boolean;
  level?: string;
  stacks?: string[];
  bio?: string;
  title?: string;
}

export interface IHandleLogin {
  email: string;
  password: string;
}
interface IProviderChildren {
  children: ReactNode;
}

export interface IJob {
  id?: string;
  title: string;
  description: string;
  place: string;
  salary: string;
  level: string;
  stacks: string[];
  type: string;
  reputation?: number;
  candidates?: IUser[];
  userId?: string;
  date?: string;
}

export const UserContext = createContext<IUserProps>({} as IUserProps);
const UserProvider = ({ children }: IProviderChildren) => {

  const token = window.localStorage.getItem("@linkeDev: UserToken");
  const id = window.localStorage.getItem("@linkeDev: UserID");
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const [user, setUser] = useState<IUser | null>(null);
  const [devList, setDevList] = useState<IUser[]>([]);
  const [jobList, setJobList] = useState<IJob[]>([]);
  const [recruiterSubs, setRecruiterSubs] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nav, setNav] = useState("devsList");
  const [tags, setTags] = useState<string[]>([]);
  const [modalEditRecruiter, setModalEditRecruiter] = useState<IEditRecruiterForm | null>(null)
  const [filteredDevs, setFilteredDevs] = useState<IUser[]>([]);
  const navigate = useNavigate();

  const handleRegister = (data: IHandleRegister) => {
    api
      .post("/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        company: data.company,
        social: data.social,
        avatar_URL: data.avatar_URL,
        is_recruiter: data.is_recruiter,
        level: data.level,
        stacks: tags,
        bio: data.bio,
        title: data.title,
      })
      .then((response) => {
        toast.success("Cadastro realizado com sucesso!");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  const handleLogin = (data: IHandleLogin) => {
    api
      .post("/login", data)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem(
          "@linkeDev: UserToken",
          response.data.accessToken
        );
        window.localStorage.setItem("@linkeDev: UserID", response.data.user.id);
        setUser(response.data.user);

        if (response.status === 200) {
          toast.success("Login realizado com sucesso");
          setTimeout(() => {
            if (response.data.user.is_recruiter) {
              navigate("/recruiterDashboard", { replace: true });
            } else {
              navigate("/devDashboard", { replace: true });
            }
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha inválido");
      });
  };

  const getRecruiterSubsList = async () => {
    await api.get("/jobs").then((res: AxiosResponse) => {
      const recSubs = res.data.filter(
        (job: IJob) => job.userId === user?.id && job
      );

      const candidates = recSubs[0].candidates;
      setRecruiterSubs(candidates);

    });
  };

  const getRecruiterJobsList = async () => {
    await api.get("/jobs").then((res: AxiosResponse) => {
      // console.log(res);
      const recruiterJobs = res.data.filter(
        (job: IJob) => job.userId === user?.id
      );
      setJobList(recruiterJobs);
    });
  };

  useEffect(() => {
    const getRecruiterDevsList = async () => {
      await api
        .get("/users")
        .then((res: AxiosResponse) => {
          const devs = res.data.filter((dev: IUser) => !dev.is_recruiter);
          setDevList(devs);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (user) {
      getRecruiterDevsList();
    }
  }, [user]);

  const searchFilter = (search: string) => {
    const filter = devList.filter(
      (dev) =>
        dev.name?.toLowerCase().includes(search) ||
        dev.title?.toLowerCase().includes(search) ||
        dev.level?.toLowerCase().includes(search)
    );

    setFilteredDevs(filter);
  };

  const getRecruiterDevsList = async () => {
    await api
      .get("/users")
      .then((res: AxiosResponse) => {
        const devs = res.data.filter((dev: IUser) => !dev.is_recruiter);

        setDevList(devs);
        // console.log(newDevs);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    async function autoLogin() {
      if (token) {
        await api
          .get(`/users/${id}`)
          .then((res: AxiosResponse) => {
            delete res.data.password;
            setUser(res.data);
          })
          .catch((err) => {
            console.error(err);
            navigate("/login");
            window.localStorage.removeItem("@linkeDev: UserToken");
            toast.error("Você foi desconectado. Faça login novamente.");
          });
      }
    }
    autoLogin();
    setNav("devsList");
  }, [token, id, navigate]);

  const today = new Date();

  const addJob = (data: IJob) => {
    api
      .post("/jobs", {
        title: data.title,
        description: data.description,
        place: data.place,
        salary: data.salary,
        level: data.level,
        stacks: tags,
        type: data.type,
        // Server-side data:
        reputation: 0,
        candidates: [],
        userId: id,
        date: today.toLocaleDateString(),
      })
      .then((response) => {
        toastSuccessAddTech();
      })
      .catch((error) => {
        toastErrorAddTech();
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setTags([]);
      });
  };

  const editProfileRecruiter = (data: IEditRecruiterForm) => {
    !data.name && delete data.name;
    !data.email && delete data.email;
    !data.company && delete data.company;
    !data.avatar_URL && delete data.avatar_URL;
    !data.social && delete data.social;

    api
      .patch(`/users/${user?.id}`, data)
      .then((response) => {
        setUser(response.data);
        setModalEditRecruiter(null);
        toast.success("perfil atualizado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao atualizar perfil!");
      });
  };


  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        devList,
        jobList,
        loading,
        setLoading,
        handleRegister,
        handleLogin,
        nav,
        setNav,
        recruiterSubs,
        getRecruiterSubsList,
        getRecruiterJobsList,
        addJob,
        tags,
        setTags,
        editProfileRecruiter,
        modalEditRecruiter,
        setModalEditRecruiter,
        filteredDevs,
        setFilteredDevs,
        searchFilter,
        setDevList,
        getRecruiterDevsList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
