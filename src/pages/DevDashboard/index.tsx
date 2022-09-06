import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/User/UserContext";
import { Container } from "./style";

function DevDashboard() {
  const { loading, user } = useContext(UserContext);
  const navigate = useNavigate();

  if (loading) {
    return <h1>carregando...</h1>;
  }

  return !user?.is_recruiter ? (
    <Container>
      <h1>Dev Dashboard</h1>
    </Container>
  ) : (
    <>{navigate("/login")}</>
  );
}

export default DevDashboard;
