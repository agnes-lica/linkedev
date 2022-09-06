import { ReactNode } from "react";
import GlobalProvider from "./Global/GlobalContext";
import UserProvider from "./User/UserContext";

interface ProviderProps {
  children: ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return (
    <GlobalProvider>
      <UserProvider>{children}</UserProvider>
    </GlobalProvider>
  );
}
