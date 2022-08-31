import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RecruiterContext } from "../../providers/Recruiter/RecruiterContext";


interface IRegister {
  name: string;
  email: string;
  password: string;
  verPassword: string;
  role: string;
  recruiter: boolean;
}
const RegisterRecruiter = () => {
  const { handleRegister, user, setUser } = useContext(RecruiterContext);

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

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
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
        <select id="typeUser">
          <option value="dev">Desenvolvedor</option>
          <option value="recruiter">Tech Recruiter</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterRecruiter;
