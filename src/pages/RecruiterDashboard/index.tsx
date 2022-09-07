import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Button from "../../components/Button";
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
  const { loading, user, devList } = useContext(UserContext);
  const { logout, handleImageError } = useContext(GlobalContext);
  const { dev, getModalDevProfile, modalDevProfile } = useContext(DevContext);

  const navigate = useNavigate();

  function vacancies() {
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
                {devList.map((dev) => (
                  <div
                    key={dev.id}
                    className="card"
                    onClick={() => getModalDevProfile(dev.id)}
                  >
                    <div className="pic">
                      <img
                        src={dev.avatar_url}
                        onError={handleImageError}
                        alt={dev.name}
                      />
                    </div>
                    <section className="content">
                      <div className="presentation">
                        <span>Há 12 horas</span>
                        <h2>{dev.name}</h2>
                        <p>{dev.title}</p>
                        <p>Modelo de trabalho</p>
                      </div>
                      <div className="details">
                        <span>São Paulo</span>
                        <span>R$ 3.000,00</span>
                        <span>2 anos</span>
                        <span>{dev.stacks}</span>
                      </div>
                    </section>
                  </div>
                ))}
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
