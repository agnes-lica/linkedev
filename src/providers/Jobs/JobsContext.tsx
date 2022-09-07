import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";
import { DevContext } from "../Dev/DevContext";


export const JobsContext = createContext({} as JobsProviderData);

interface JobsProps {
  children: ReactNode;
}

interface JobsProviderData{
    getJob: (id: string) => void;
    job: JobData | null;
    getJobModal: (id: string) => void;
    modalJobDetail: boolean;
    setModalJobDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

interface JobData {
    title: string;
    description: string;
    place: string;
    salary: string;
    level: string;
    stacks: string;
    type: string;
    reputation: string;
    candidates: string[];
    userId: string;
    date: string;
}

function JobsProvider({ children }: JobsProps) {

    const [job, setJob] = useState<JobData | null>(null)
    const [modalJobDetail, setModalJobDetail] = useState(false)

    const {getDev} = useContext(DevContext)

    const getJob = (id: string) => {
        api.get(`jobs/${id}`)
        .then(res => {
            console.log(res)
            setJob(res.data)
        })
    }

    function getJobModal(id: string) {        
        Promise.all([getJob(id), getDev(job?.userId)])
        setModalJobDetail(true)
    }

    return (
        <JobsContext.Provider value={{ job, getJob, getJobModal, modalJobDetail, setModalJobDetail }}>
        {children}
        </JobsContext.Provider>
    );
}

export default JobsProvider;