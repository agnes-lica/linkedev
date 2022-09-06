import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Button from "../../components/Button";
import DevsList from "../../components/DevsList";
import DevProfile from "../../components/DevProfile";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { UserContext } from "../../providers/User/UserContext";
import { DevContext } from "../../providers/Dev/DevContext";
import { useContext, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function RecruiterDashboard() {
  const { loading, user, devList } = useContext(UserContext);
  const [isJobs, setIsJobs] = useState(false);
  const [isSubscriptions, setIsSubscriptions] = useState(false);
  const { logout, handleImageError } = useContext(GlobalContext);
  const { dev, getDev, modalDevProfile } = useContext(DevContext);

  const navigate = useNavigate();

  function jobs() {
    setIsJobs(!isJobs);
    navigate("/jobs");
  }
  function subscriptions() {
    navigate("/subscriptions");
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
                <DevsList />
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
