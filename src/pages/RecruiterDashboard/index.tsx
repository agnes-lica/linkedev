import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Button from "../../components/Button";
import DevsList from "../../components/DevsList";
import JobsList from "../../components/JobsList";
import SubscriptionsList from "../../components/SubscriptionsList";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { UserContext } from "../../providers/User/UserContext";
import { useContext } from "react";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import DevProfile from "../../components/ModalDevProfile";
import { DevContext } from "../../providers/Dev/DevContext";

function RecruiterDashboard() {
  const { loading, user, nav, setNav } = useContext(UserContext);
  const { logout, handleImageError } = useContext(GlobalContext);
  const { dev, getModalDevProfile, modalDevProfile } = useContext(DevContext);

  const navigate = useNavigate();

  const { getRecruiterSubsList, getRecruiterJobsList } =
    useContext(UserContext);

  function jobs() {
    getRecruiterJobsList();
    setNav("jobsList");
    // navigate("/jobs");
  }
  function subscriptions() {
    getRecruiterSubsList();
    setNav("subsList");
    // navigate("/subscriptions");
  }

  return (
    <>
      {user?.is_recruiter && (
        <Container>
          <Header />
          <div className="recruiterContainer">
            <Aside />
            <div className="recruiterMain">
              <div className="recruiterMainHeader">
                <div className="title">
                  <h2>Início</h2>
                </div>
                <nav>
                  <section className="buttons">
                    <Button buttonFunction={jobs}>Minhas Vagas</Button>
                    <Button buttonFunction={subscriptions}>Inscrições</Button>
                  </section>
                  <section className="search">
                    <input placeholder="Nome, Tecnologia..." type="text" />
                    <button>
                      <AiOutlineSearch size={25} />
                    </button>
                  </section>
                  <section className="filter">
                    <p>
                      Filtrando por: <span>Todos</span>
                      <MdOutlineKeyboardArrowDown />
                    </p>
                  </section>
                </nav>
              </div>
              <div className="recruiterMainList">
                <ul>
                  {nav === "jobsList" && <JobsList />}
                  {nav === "subsList" && <SubscriptionsList />}
                  {nav === "devsList" && <DevsList />}
                </ul>
              </div>
            </div>
          </div>
          {modalDevProfile && <DevProfile dev={dev} />}
        </Container>
      )}
    </>
  );
}

export default RecruiterDashboard;
