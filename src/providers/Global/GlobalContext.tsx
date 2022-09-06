import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export const GlobalContext = createContext({} as GlobalProviderData);

interface GlobalProps {
  children: ReactNode;
}

interface GlobalProviderData {
  logout: () => void;
  // setUsersList: React.Dispatch<SetStateAction<IUser[]>>;
  // usersList: IUser[];
}

function GlobalProvider({ children }: GlobalProps) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <GlobalContext.Provider value={{ logout }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
