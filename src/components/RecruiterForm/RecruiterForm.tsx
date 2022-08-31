import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RecruiterContext } from "../../providers/Recruiter/RecruiterContext";

interface IRegisterRecruiter {
  name: string;
  email: string;
  password: string;
  empresa?: string;
  social?: string;
  avatar_URL?: string;
  recruiter?: boolean;
  level?: string;
  stacks?: string[];
  bio?: string;
}
const RecruiterForm = () => {
  const { handleRegister } = useContext(RecruiterContext);

  const formDev = yup.object().shape({
    empresa: yup.string().required("o campo empresa é obrigatório"),
    social: yup.string().url().required("campo social obrigatório"),
    avatar_URL: yup.string().url().required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm<IRegisterRecruiter>({
    resolver: yupResolver(formDev),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="empresa">Empresa</label>
        <input
          type="text"
          id="empresa"
          placeholder="Digite o nome da sua empresa"
          {...register("empresa")}
        />
        {/* <p>{errors.empresa?.message}</p> */}

        <label htmlFor="social">Link Social</label>
        <input
          value="text"
          id="social"
          placeholder="Coloque aqui o link do seu social"
          {...register("social")}
        />

        <label htmlFor="avatar">Link para avatar</label>
        <input
          type="text"
          id="avatar"
          placeholder="Coloque o link para seu avatar de perfil"
          {...register("avatar_URL")}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RecruiterForm;
