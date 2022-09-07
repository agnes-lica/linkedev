import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ModalJobDetails from "../../components/ModalJobDetails";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { JobsContext } from "../../providers/Jobs/JobsContext";
import { UserContext } from "../../providers/User/UserContext";

import { Container } from "./style";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { MdLocationOn, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../../components/Button";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { BsCashCoin, BsThreeDots, BsFillLayersFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Iparam {
  valor: string;
}

function DevDashboard() {
  const { job, getJobModal, modalJobDetail, setModalJobDetail, jobList } =
    useContext(JobsContext);
  const { user } = useContext(UserContext);
  const { logout } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [mySubscription, setMySubscription] = useState(false);

  return !user?.is_recruiter ? (
    <Container>
      <Header />
      <section className="mainContent">
        <Aside />
        {mySubscription ? (
          <>
            <div className="jobContainer">
              <div className="jobContainerHeader">
                <h2>Meus Envios</h2>
                <div className="buttonArrow">
                  <button onClick={() => setMySubscription(false)}>
                    <AiOutlineArrowLeft size={20} />
                  </button>
                </div>
              </div>
              <div className="jobList">
                <div className="job">
                  <span>Há 1 hora</span>
                  <div>
                    <h3>title</h3>
                    <p>stack: </p>
                    <span>Não lido</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="jobContainer">
            <div className="jobContainerHeader">
              <h2>Início</h2>
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
                  <input placeholder="Nome, Tecnologia..." type="text" />
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
              {jobList?.map((jobElem) => (
                <div key={jobElem.id} className="card">
                  <div className="right">
                    <span>Há 12 horas</span>
                    <h2>{jobElem.title}</h2>
                    <p>{jobElem.description}</p>
                    <p>{jobElem.type}</p>
                  </div>
                  <div className="left">
                    <button
                      onClick={() => getJobModal(jobElem.id)}
                      className="more"
                    >
                      <BsThreeDots size={25} />
                    </button>
                    <div className="textDescription">
                      getModalDevProfile(dev.id)
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
    </Container>
  ) : (
    <>{logout()}</>
  );
}

export default DevDashboard;
