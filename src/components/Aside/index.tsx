import { Container } from "./style";
import { MdWorkOutline, MdPlace, MdOutlineMail } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { GlobalContext } from "../../providers/Global/GlobalContext";

function Aside() {
  const style = { fontSize: "22px", color: "#BF90DC" };

  const { user, setEditModalDev} = useContext(UserContext);
  const { handleImageError } = useContext(GlobalContext)

  return (
    <Container>
      {user && (
        <>
          <header>
            <img
              src={user.avatar_URL || "../../assets/user.png"} onError={handleImageError}
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

          <button onClick={() => setEditModalDev(user)}>
            <BiEditAlt size={22} /> Editar Perfil
          </button>
        </>
      )}
    </Container>
  );
}

export default Aside;
