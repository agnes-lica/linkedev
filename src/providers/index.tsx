import { ReactNode } from "react";
import GlobalProvider from "./Global/GlobalContext";
import UserProvider from "./User/UserContext";
import DevProvider from "./Dev/DevContext";
import VacancieProvider from "./Vacancie/VacancieContext";
interface ProviderProps {
  children: ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return (
    <GlobalProvider>
      <UserProvider>
        <DevProvider>
          <VacancieProvider>{children}</VacancieProvider>
        </DevProvider>
      </UserProvider>
    </GlobalProvider>
  );
}
