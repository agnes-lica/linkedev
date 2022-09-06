import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { UserContext } from "../../providers/User/UserContext";
import { Container } from "./style";

function DevDashboard() {
  const { loading, user } = useContext(UserContext);
  const { logout } = useContext(GlobalContext);
  const navigate = useNavigate();

  if (loading) {
    return <h1>carregando...</h1>;
  }

  return !user?.is_recruiter ? (
    <Container>
      <h1>Dev Dashboard</h1>
    </Container>
  ) : (
    <>{logout()}</>
  );
}

export default DevDashboard;
