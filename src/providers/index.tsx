import { ReactNode } from "react";
import GlobalProvider from "./Global/GlobalContext";
import RecruiterProvider from "./Recruiter/RecruiterContext";


interface ProviderProps{
    children: ReactNode;
}

export function Providers( {children}: ProviderProps ){
    return(
        <GlobalProvider>
            <RecruiterProvider>
                {children}
            </RecruiterProvider>
        </GlobalProvider>
    )
}