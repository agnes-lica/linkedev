import { useContext } from "react";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { UserContext } from "../../providers/User/UserContext";
import { DevItem } from "./styles";

const DevsList = () => {
  const { devList } = useContext(UserContext);
  const { handleImageError } = useContext(GlobalContext);

  return (
    <>
      {devList.map((dev) => (
        <DevItem key={dev.id} className="card">
          <div className="pic">
            <img
              src={dev.avatar_URL}
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
        </DevItem>
      ))}
    </>
  );
};

export default DevsList;
