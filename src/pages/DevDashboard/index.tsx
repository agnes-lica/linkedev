import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ModalJobDetails from "../../components/ModalJobDetails";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { JobsContext } from "../../providers/Jobs/JobsContext";
import { UserContext } from "../../providers/User/UserContext";
import { Container } from "./style";

function DevDashboard() {
  const { loading, user } = useContext(UserContext);
  const { logout } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { getJobModal, modalJobDetail } = useContext(JobsContext)

  if (loading) {
    return <h1>carregando...</h1>;
  }

  return !user?.is_recruiter ? (
    <Container>

      <h1 onClick={() => getJobModal("inserir id da vaga")}>Dev Dashboard</h1>


      {modalJobDetail && 
        <ModalJobDetails />
      }
    </Container>
  ) : (
    <>{logout()}</>
  );
}

export default DevDashboard;
