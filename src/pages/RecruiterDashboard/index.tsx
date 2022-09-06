import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Button from "../../components/Button";
import DevsList from "../../components/DevsList";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { UserContext } from "../../providers/User/UserContext";
import { useContext, useState } from "react";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import DevProfile from "../../components/DevProfile";
import { DevContext } from "../../providers/Dev/DevContext";

function RecruiterDashboard() {
  const { loading, user, devList } = useContext(UserContext);
  const [isVacancies, setIsVacancies] = useState(false);
  const [isSubscriptions, setIsSubscriptions] = useState(false);
  const { logout, handleImageError } = useContext(GlobalContext);
  const { dev, getDev, modalDevProfile } = useContext(DevContext);

  const navigate = useNavigate();

  function vacancies() {
    setIsVacancies(!isVacancies);
    navigate("/vacancies");
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
                    <Button buttonFunction={vacancies}>Minhas Vagas</Button>
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
