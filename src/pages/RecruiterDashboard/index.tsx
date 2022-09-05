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
          <div className="recruiterMainList">
            <div className="card">
              <div className="pic">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Foto do perfil"
                />
              </div>
              <section className="content">
                <div className="presentation">
                  <span>Há 12 horas</span>
                  <h2>Nome do desenvolvedor</h2>
                  <p>Objetivo do dev</p>
                  <p>Modelo de trabalho</p>
                </div>
                <div className="details">
                  <span>São Paulo</span>
                  <span>R$ 3.000,00</span>
                  <span>2 anos</span>
                  <span>Html, Css, JavaScript</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RecruiterDashboard;
