import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { UserContext } from "../../providers/User/UserContext";

import { Container } from "./style";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../../components/Button";
import { AiOutlineSearch } from "react-icons/ai";
import VacancieProvider, {
  VacancieContext,
} from "../../providers/Vacancie/VacancieContext";

interface Iparam {
  valor: string;
}

function DevDashboard() {
  const { vacancieList, setVacancieList, vacancie, setVacancie } =
    useContext(VacancieContext);
  const { user } = useContext(UserContext);
  const { logout } = useContext(GlobalContext);
  const navigate = useNavigate();

  function funçãoTeste() {
    console.log("oi");
  }

  console.log(vacancieList);

  return !user?.is_recruiter ? (
    <Container>
      <Header />
      <section className="mainContent">
        <Aside />
        <div className="jobContainer">
          <div className="jobContainerHeader">
            <h2>Início</h2>
            <nav>
              <div className="buttons">
                <Button buttonFunction={funçãoTeste}>Meus envios</Button>
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
          <section>
            {vacancieList.map((job) => (
              <div key={job.description} className="card">
                <section className="content">
                  <div className="presentation">
                    <span>Há 12 horas</span>
                    <h2>{job.title}</h2>
                    <p>{job.level}</p>
                    <p>{job.type}</p>
                  </div>
                  <div className="details">
                    <span>{job.place}</span>
                    <span>{job.salary}</span>
                    <span>{job.stacks}</span>
                  </div>
                </section>
              </div>
            ))}
          </section>
        </div>
      </section>
    </Container>
  ) : (
    <>{logout()}</>
  );
}

export default DevDashboard;
