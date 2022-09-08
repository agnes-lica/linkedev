import { useContext, useState } from "react";
import ModalJobDetails from "../../components/ModalJobDetails";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { JobsContext } from "../../providers/Jobs/JobsContext";
import { UserContext } from "../../providers/User/UserContext";
import { Container } from "./style";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { MdLocationOn, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCashCoin, BsThreeDots, BsFillLayersFill } from "react-icons/bs";
import EditModalProfileDev from "../../components/EditModalPerfilDev";


function DevDashboard() {
  const {  getJobModal, modalJobDetail, jobList, handleSearchJob, filteredJobs } =
    useContext(JobsContext);
  const { user, editModalDev } = useContext(UserContext);
  const { logout } = useContext(GlobalContext);
  const [mySubscription, setMySubscription] = useState(false);


  return !user?.is_recruiter ? (
    <Container>
      <Header />
      <section className="mainContent">
        <Aside />
        {mySubscription ? (
          <div className="jobContainer">
            <h1>teste</h1>
            <button onClick={() => setMySubscription(false)}>voltar</button>
          </div>
        ) : (
          <div className="jobContainer">
            <div className="jobContainerHeader">
              <h2>Vagas</h2>
              <nav>
                <div className="buttons">
                  <button
                    className="buttonMySubscription"
                    onClick={() => setMySubscription(true)}
                  >
                    Meus envios
                  </button>
                </div>
                <div className="search">
                  <input placeholder="Nome, Tecnologia..." 
                  type="text" 
                  onChange={(e) => handleSearchJob(e.target.value)}/>
                  <button className="searchButton">
                    <AiOutlineSearch size={25} />
                  </button>
                </div>
                <div className="filter">
                  <p>
                    Filtrando por: <span>Todos</span>
                    <MdOutlineKeyboardArrowDown />
                  </p>
                </div>
              </nav>
            </div>
            <section className="jobList">
              {(filteredJobs?.length! > 0 ? filteredJobs : jobList)?.map((jobElem) => (
                <div key={jobElem.id}
                      onClick = {() => getJobModal(jobElem.id)}  
                      className="card"
                >
                  <div className="right">
                    <span>Há 12 horas</span>
                    <h2>{jobElem.title}</h2>
                    <p>{jobElem.description}</p>
                    <p>{jobElem.type}</p>
                  </div>
                  <div className="left">
                    {/* <button
                      }
                      className="more"
                    >
                      <BsThreeDots size={25} />
                    </button> */}
                    <div className="textDescription">
                      
                      <span>
                        <MdLocationOn />
                        {jobElem.place}
                      </span>
                      <span>
                        <BsCashCoin />
                        {jobElem.salary}
                      </span>
                      <span>
                        <BsFillLayersFill />
                        {jobElem.stacks}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}
      </section>
      {modalJobDetail && <ModalJobDetails />}
      {editModalDev && <EditModalProfileDev />}
    </Container>
  ) : (
    <>{logout()}</>
  );
}

export default DevDashboard;
