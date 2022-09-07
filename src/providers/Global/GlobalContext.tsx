import { createContext, ReactNode, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../../assets/user.png";
export const GlobalContext = createContext({} as GlobalProviderData);

interface GlobalProps {
  children: ReactNode;
}

interface GlobalProviderData {
  logout: () => void;
  handleImageError: (e: SyntheticEvent<HTMLImageElement>) => void;
}

function GlobalProvider({ children }: GlobalProps) {
  // const [usersList, setUsersList] = useState([]); //acho q n precisa mais
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = userImg;
  };

  return (
    <GlobalContext.Provider value={{ logout, handleImageError }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
