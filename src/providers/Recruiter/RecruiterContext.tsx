import { AxiosResponse } from "axios";
import { useState, ReactNode, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
//import { getLinkeDev } from "../../Services/LinkeDev";

interface IRecruiterProps {
  user: IRecruiter | null;
  setUser: React.Dispatch<React.SetStateAction<null| IRecruiter>>
  handleRegister: (data: IHandleRegister) => void;
  handleLogin: (data: IHandleLogin) => void;
  // loading: boolean;
}

export interface IRecruiter {
  name: string;
  email: string;
  password: string;
  company: string;
  social: string;
  avatar_URL: string;
  is_recruiter: boolean;
  level: string;
  stacks: string[];
  bio: string;
  title: string;
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

export const RecruiterContext = createContext<IRecruiterProps>(
  {} as IRecruiterProps
);
const RecruiterProvider = ({ children }: IProviderChildren) => {
  const [user, setUser] = useState<IRecruiter | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const token = window.localStorage.getItem("@linkeDev: UserToken");
  const id = window.localStorage.getItem("@linkeDev: UserID")

  const handleRegister = (data: IHandleRegister) => {
    api
      .post("/register", data)
      .then((response) => {
        console.log(response.data);
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
        console.log(response.data);
        window.localStorage.clear()
        window.localStorage.setItem(
          "@linkeDev: UserToken", response.data.accessToken
        );
        window.localStorage.setItem(
          "@linkeDev: UserID", response.data.user.id
        );
        setUser(response.data.user);

        if (response.status === 200) {
          toast.success("Login realizado com sucesso");
          setTimeout(() => {
            if(response.data.user.is_recruiter){
              navigate("/recruiterDashboard", { replace: true })
            }else{
              navigate("/devDashboard", { replace: true })
            }
            }, 3000);
        } 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha inválido");
      });
  };

  useEffect(() => {
  async function autoLogin() {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await api.get(`/users/${id}`)
      .then((res: AxiosResponse) => {
          setUser(res.data)
      })
      .catch(err => {
        console.error(err)
        navigate("/login")
        toast.error("Você foi desconectado. Faça login novamente.")
      })
    }
  }
     autoLogin();

  }, [token, id]);

  return (
    <RecruiterContext.Provider
      value={{
        user,
        setUser,
        // loading,
        handleRegister,
        handleLogin,
      }}
    >
      {children}
    </RecruiterContext.Provider>
  );
};

export default RecruiterProvider;
