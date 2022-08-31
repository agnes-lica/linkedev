import { useState, ReactNode, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

interface IRecruiterProps {
  user: IRecruiter[] | [] | string;
  setUser: (user: IRecruiter[] | []) => void;
  handleRegister: (data: IHandleRegister) => void;
  handleLogin: (data: IHandleLogin) => void;
}

export interface IRecruiter {
  name: string;
  email: string;
  password: string;
  empresa: string;
  social: string;
  avatar_URL: string;
  recruiter: boolean;
  role: string;
  level: string;
  stacks: string[];
  bio: string;
}

export interface IHandleRegister {
  name: string;
  email: string;
  password: string;
  empresa?: string;
  social?: string;
  avatar_URL?: string;
  recruiter?: boolean;
  role?: string;
  level?: string;
  stacks?: string[];
  bio?: string;
}

interface IHandleLogin {
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
  const [user, setUser] = useState<IRecruiter[] | string>([]);
  const navigate = useNavigate();

  const handleRegister = (data: IHandleRegister) => {
    api
      .post("register", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Cadastro realizado com sucesso!");
        navigate("login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("ops! algo deu errado");
      });
  };

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("@linkeDev: Recruitertoken");

      if (token) {
        try {
          const { data } = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data)
        } catch (error) {}
      }
    }
    autoLogin();
  }, []);

  const handleLogin = (data: IHandleLogin) => {
    api
      .post("login", data)
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem(
          "@linkeDev: Recruitertoken ",
          response.data.token
        );
        setUser(response.data.recruiter);
        toast.success("login realizado com sucesso");
        setTimeout(() => navigate("dashboard", { replace: true }));
      })
      .catch((err) => {
        console.log(err);
        toast.error("email ou senha inválido");
      });
  };

  return (
    <RecruiterContext.Provider
      value={{ user, setUser, handleRegister, handleLogin }}
    >
      {children}
    </RecruiterContext.Provider>
  );
};

export default RecruiterProvider;
