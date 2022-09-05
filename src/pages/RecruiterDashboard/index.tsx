import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function RecruiterDashboard() {
  const navigate = useNavigate();

  function vacancies() {
    navigate("/vacancies");
  }
  function subscriptions() {
    navigate("/subscriptions");
  }

  return (
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
        </div>
      </div>
    </Container>
  );
}

export default RecruiterDashboard;
