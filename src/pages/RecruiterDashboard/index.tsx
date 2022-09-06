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

function RecruiterDashboard() {
  const { loading, user, devList } = useContext(UserContext);
  const { logout } = useContext(GlobalContext);
  const [isVacancies, setIsVacancies] = useState(false);
  const [isSubscriptions, setIsSubscriptions] = useState(false);

  const navigate = useNavigate();

  function vacancies() {
    setIsVacancies(!isVacancies);
    navigate("/vacancies");
  }
  function subscriptions() {
    navigate("/subscriptions");
  }

  return user?.is_recruiter ? (
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
    </Container>
  ) : (
    <>{logout()}</>
  );
}

export default RecruiterDashboard;
