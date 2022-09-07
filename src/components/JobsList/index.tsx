import { useContext } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { JobsContainer } from "./styles";
import { BiArrowBack } from "react-icons/bi";

const JobsList = () => {
  function devsList() {
    setNav("devsList");
  }

  const { nav, setNav, jobList } = useContext(UserContext);
  // console.log(jobList);
  return (
    <JobsContainer>
      <div className="backArrow">
        <BiArrowBack
          className="btnArrowBack"
          size={25}
          onClick={() => devsList()}
        />
      </div>
      {jobList.map((job) => (
        <li key={job.userId}>
          <h1>{job.title}</h1>
          <p>N° aplicações: {job?.candidates?.length}</p>
          <p>{job.place}</p>
          <p>{job.salary}</p>
          <p>{job.level}</p>
          <p>{job.type}</p>
        </li>
      ))}
    </JobsContainer>
  );
};

export default JobsList;
