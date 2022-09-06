import { useContext } from "react";
import { UserContext } from "../../providers/User/UserContext";

const DevsList = () => {
  const { devList } = useContext(UserContext);

  return (
    <>
      {devList.map((dev) => (
        <div key={dev.id} className="card">
          <div className="pic">
            <img src={dev.avatar_url} alt={dev.name} />
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
    </>
  );
};

export default DevsList;
