import { useState, ReactNode, createContext } from "react";
import api from "../../services/api";
import { IUser } from "../User/UserContext";

export const DevContext = createContext({} as DevProviderData)

interface DevProps{
    children: ReactNode;
}

interface DevProviderData{
    dev: IUser| null;
    getDev: (id: string) => void;
    modalDevProfile: boolean;
    setModalDevProfile: React.Dispatch<React.SetStateAction<boolean>>;
    getModalDevProfile: (id: string) => void;
}

function DevProvider({children}: DevProps){
    
    const [dev, setDev] = useState<IUser | null>(null)
    const [modalDevProfile, setModalDevProfile] = useState<boolean>(false)

    async function getDev(id: string){
        await api.get(`/users/${id}`)
        .then(res => {
            setDev(res.data)
        })
    }

    async function getModalDevProfile(id: string){
        await getDev(id)
        setModalDevProfile(true)
    }

    return(
        <DevContext.Provider value={{dev, getDev, getModalDevProfile, modalDevProfile, setModalDevProfile}}>
            {children}
        </DevContext.Provider>
    )
}


export default DevProvider
