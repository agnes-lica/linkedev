import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { RecruiterContext } from "../../Context/RecruiterContext";

interface ILogin {
  email: string;
  password: string;
}

const formularioLogin = yup.object({
  email: yup.string().email("e-mail inválido").required("e-mail obrigatório"),
  password: yup
    .string()
    .min(6, "no minimo 8 caracteres")
    .required("senha obrigatória"),
});

const Login = () => {
  const { handleLogin } = useContext(RecruiterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(formularioLogin),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
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
          placeholder="********"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
