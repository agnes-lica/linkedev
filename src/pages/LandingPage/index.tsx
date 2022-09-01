import { useNavigate } from "react-router-dom";
import { Container } from "./style";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <section>
        <div>

          <h2>A maior plataforma de contratações tech!</h2>
        </div>

      </section>
      <section>
        <button onClick={() => navigate("/login")}>Entrar</button>
        <p>
          Você é Dev? Procure vagas, converse com recrutadores e seja
          contratado!
        </p>
        <p>
          Uma comunidade gigante para conhecer que conecta devs e recruiters de
          todo o brasil em um só lugar!
        </p>
        <p>
          Como Recruiter você pode coversar com vários techs e achar aquele que
          mais se encaixa no perfil da sua empresa!
        </p>
        <button onClick={() => navigate("/signup")}>Cadastrar</button>
      </section>
    </Container>
  );
}

export default LandingPage;
