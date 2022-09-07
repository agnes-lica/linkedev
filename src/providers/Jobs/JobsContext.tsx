import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { DevContext } from "../Dev/DevContext";
import { IUser, UserContext } from "../User/UserContext";


export const JobsContext = createContext({} as JobsProviderData);

interface JobsProps {
  children: ReactNode;
}

interface JobsProviderData{
    // getJobAndRecruiter: (id: string) => void;
    job: JobData | null;
    getJobModal: (id: string) => void;
    modalJobDetail: boolean;
    setModalJobDetail: React.Dispatch<React.SetStateAction<boolean>>;
    jobApplication: (id: string) => void;
}

interface JobData {
    title: string;
    description: string;
    place: string;
    salary: string;
    level: string;
    stacks: string[];
    type: string;
    reputation: string;
    candidates: IUser[];
    userId: string;
    date: string;
    id: string;
}

function JobsProvider({ children }: JobsProps) {

    const [job, setJob] = useState<JobData | null>(null)
    const [modalJobDetail, setModalJobDetail] = useState(false)

    const {getDev} = useContext(DevContext)
    const {user} = useContext(UserContext)

    const getJobAndRecruiter = async (id: string) => {
        await api.get(`jobs/${id}`)
        .then(res => {
            setJob(res.data)
            return res
        })
        .then((res) => {
            getDev(res.data.userId)
        })
        .catch(err => console.error(err))

    }

    function getJobModal(id: string) {        
        getJobAndRecruiter(id)
        setModalJobDetail(true)
    }

    async function jobApplication(id: string){
        const repeated = job?.candidates.find((candidate) => candidate.id === user?.id)
        if(repeated){
            return toast.error("Você já se candidatou para essa vaga")
        }
        const data = {candidates: [...job?.candidates!, user]}
        await api.patch(`jobs/${id}`, data)
        .then(res => {
            toast.success("Aplicação enviada com sucesso. Boa sorte!")
            getJobAndRecruiter(id)
        })
        .catch(err => {
            console.error(err)
            toast.error("Ops! Algo deu errado.")
        })
    }

    return (
        <JobsContext.Provider value={{ job, getJobModal, modalJobDetail, setModalJobDetail, jobApplication }}>
        {children}
        </JobsContext.Provider>
    );
}

export default JobsProvider;