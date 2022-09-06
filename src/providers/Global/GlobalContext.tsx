import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({} as GlobalProviderData);

interface GlobalProps {
  children: ReactNode;
}

interface GlobalProviderData {
  logout: () => void;
}

function GlobalProvider({ children }: GlobalProps) {
  const [usersList, setUsersList] = useState([]);
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
