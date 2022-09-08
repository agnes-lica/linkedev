import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { DevContext } from "../Dev/DevContext";
import { UserContext } from "../User/UserContext";

export const JobsContext = createContext({} as JobsProviderData);

interface JobsProps {
  children: ReactNode;
}

interface JobsProviderData {
  jobApplication: (id: string) => void;
  job: JobData | null;
  getJobModal: (id: string) => void;
  modalJobDetail: boolean;
  setModalJobDetail: React.Dispatch<React.SetStateAction<boolean>>;
  jobList: JobData[] | null;
  filteredJobs: JobData[] | null;
  handleSearchJob: (search: string) => void;
}

export interface JobData {
  title: string;
  description: string;
  place: string;
  salary: string;
  level: string;
  stacks: string[];
  type: string;
  reputation: string;
  candidates: any[];
  userId: string;
  date: string;
  id: string;
}

function JobsProvider({ children }: JobsProps) {
  const [job, setJob] = useState<JobData | null>(null);
  const [jobList, setJobList] = useState<JobData[] | null>([]);
  const [modalJobDetail, setModalJobDetail] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState<JobData[] | null>([])

  const { getDev } = useContext(DevContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getJobList = async () => {
      await api
        .get("jobs")
        .then((res) => {
          console.log(res);
          setJobList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getJobList();
  }, []);

  const getJobAndRecruiter = async (id: string) => {
    console.log(`${id} job and recruiter`);

    await api
      .get(`jobs/${id}`)
      .then((res) => {
        setJob(res.data);
        console.log(res.data);
        return res;
      })
      .then((res) => {
        console.log(res.data.userId);

        getDev(res.data.userId);
      })
      .catch((err) => console.error(err));
  };

  function getJobModal(id: string) {
    getJobAndRecruiter(id);
    setModalJobDetail(true);
  }

  async function jobApplication(id: string) {
    const repeated = job?.candidates.find(
      (candidate) => candidate.id === user?.id
    );
    if (repeated) {
      return toast.error("Você já se candidatou para essa vaga");
    }
    const data = { candidates: [...job?.candidates!, user] };
    await api
      .patch(`jobs/${id}`, data)
      .then((res) => {
        toast.success("Aplicação enviada com sucesso. Boa sorte!");
        getJobAndRecruiter(id);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Ops! Algo deu errado.");
      });
  }


  const handleSearchJob = (search: string) => {
    const newList = jobList?.filter((job) => {
      if(job.title.toLowerCase().includes(search)
      || job.description.toLowerCase().includes(search)
      || job.level.toLowerCase().includes(search)
      || job.place.toLowerCase().includes(search)){
        return true
      }
      return false
    })
    setFilteredJobs(newList!)
  }

  return (
    <JobsContext.Provider
      value={{
        job,
        getJobModal,
        modalJobDetail,
        setModalJobDetail,
        jobList,
        jobApplication,
        handleSearchJob,
        filteredJobs
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export default JobsProvider;
