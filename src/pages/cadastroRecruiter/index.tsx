import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../providers/User/UserContext";
import RecruiterForm from "../../components/RegisterRecruiterForm";
import DevForm from "../../components/RegisterDevForm";
import { Container, Form, Header } from "./style";
import { Link } from "react-router-dom";

interface IRegister {
  name: string;
  email: string;
  password: string;
  verPassword: string;
  // role: string;
  // recruiter: boolean;
}

const RegisterRecruiter = () => {
  const { handleRegister, user } = useContext(UserContext);
  const [selectform, setSelectForm] = useState("");

  const formularioCadastro = yup.object().shape({
    name: yup.string().required("nome obrigatório"),
    email: yup.string().email("email inválido").required("email obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve conter pelo menos 8 caracteres")
      .matches(
        new RegExp("^(?=.*[a-za-z])(?=.*[0-9])(?=.*[!@#$%^&*])"),
        "A senha deve conter letras, números e simbolos"
      )
      .required("senha obrigatória"),
    verPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .equals([yup.ref("password"), null], "A senha não corresponde"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(formularioCadastro),
  });

  // const handlerUserForm = (event: React.FormEvent<HTMLFormElement>) => {
  //   if (event.target.value == "recruiter") {
  //     setSelectForm("recruiter");
  //   }
  // };

  return (
    <Container>
      <Link to="/" className="buttonBack">
        sair
      </Link>
      <Header>
        <img className="logoLinke" src="./logoLinke.png" alt="LinkeDev" />
      </Header>
      <div className="div">
        <div className="divImgDesktop">
          <img className="logoLinke2" src="./logoLinke.png" alt="LinkeDev" />
          <h3>A maior plataforma de contratações tech!</h3>
          <img className="imgLogin" src="./logoLogin.svg" alt="Logo Login" />
        </div>

        <div className="divRegister">
          <h2>Cadastro de Usuário</h2>

          <Form onSubmit={handleSubmit(handleRegister)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>

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

            <label htmlFor="verPassword">Confirmar Senha</label>
            <input
              type="password"
              id="verpassword"
              placeholder="Confirmar senha"
              {...register("verPassword")}
            />
            <p>{errors.verPassword?.message}</p>

            <label htmlFor="typeUser">Tipo de Usuário</label>
            <select
              id="typeUser"
              onChange={(event) => setSelectForm(event.target.value)}
            >
              <option value="item">---selecione um item---</option>
              <option value="dev">Desenvolvedor</option>
              <option value="recruiter">Tech Recruiter</option>
            </select>
            {selectform === "dev" ? <DevForm /> : <RecruiterForm />}
            <button className="buttonRegister" type="submit">
              Cadastrar
            </button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterRecruiter;
