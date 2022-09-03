import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RecruiterContext } from "../../providers/Recruiter/RecruiterContext";
import { Container, Form, Header } from "./style";
import RegisterDevRecPage from "../../components/RegisterDevRecPage";

interface IRegister {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  const { handleLogin } = useContext(RecruiterContext);
  const [backDev, setBackDev] = useState(false);
  const [page, setPage] = useState(true);

  const formularioCadastro = yup.object().shape({
    email: yup.string().email("e-mail inválido").required("e-mail obrigatório"),
    password: yup
      .string()
      .min(6, "no minimo 8 caracteres")
      .required("senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(formularioCadastro),
  });

  return (
    <>
      <Container page={page}>
        <Header>
          <img className="logoLinke" src="./logoLinke.svg" alt="LinkeDev" />
        </Header>
        <div className="div">
          <div className="divImgDesktop">
            <img className="logoLinke2" src="./logoLinke.svg" alt="LinkeDev" />
            <h3>A maior plataforma de contratações tech!</h3>
            <img
              className="imgLogin"
              src="./newLogoLinke.svg"
              alt="Logo Login"
            />
          </div>

          <div className="divLogin">
            <h2>Login</h2>

            <Form onSubmit={handleSubmit(handleLogin)}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="exemplo@email.com"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>

              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>

              <div className="back">
                <button
                  className="buttonBack"
                  onClick={() => {
                    setBackDev(true);
                    setPage(false);
                  }}
                >
                  voltar
                </button>
                <button className="buttonLogin" type="submit">
                  Entrar
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
      {backDev && <RegisterDevRecPage />}
    </>
  );
};

export default Login;
