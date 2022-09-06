import { Container } from "./style";
import { MdWorkOutline, MdPlace, MdOutlineMail } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../providers/User/UserContext";
import userImg from "../../assets/user.png";

function Aside() {
  const style = { fontSize: "22px", color: "#BF90DC" };

  const { user } = useContext(UserContext);

  return (
    <Container>
      {user && (
        <>
          <header>
            <img
              src={user.avatar_URL ? user.avatar_URL : userImg}
              alt="Foto de perfil do usuário"
            />
            <span>{user.is_recruiter ? "Tech Recruiter" : user?.title}</span>
            <h1>{user.name}</h1>
          </header>

          <div>
            <p>
              <MdWorkOutline style={style} />{" "}
              {user.is_recruiter ? `Recruiter at ${user.company}` : user.title}{" "}
            </p>
            <p>
              <MdPlace style={style} /> Localização
            </p>
            <p>
              <MdOutlineMail style={style} /> {user.social}
            </p>
          </div>

          <button onClick={() => console.log("editar perfil")}>
            <BiEditAlt size={22} /> Editar Perfil
          </button>
        </>
      )}
    </Container>
  );
}

export default Aside;
