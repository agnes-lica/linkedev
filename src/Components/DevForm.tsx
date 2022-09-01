import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RecruiterContext } from "../Context/RecruiterContext";

interface IRegisterDev {
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
const DevForm = () => {
  const { handleRegister } = useContext(RecruiterContext);
  const [stacks, setStacks] = useState(null);

  const formRecruiter = yup.object().shape({
    level: yup.string().required("escolha um dos níveis"),
    stacks: yup.string().required("adicione suas tecnologias"),
    bio: yup.string().required("bio obrigatória"),
    social: yup.string().url().required("campo social obrigatório"),
    avatar_URL: yup.string().url().required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm<IRegisterDev>({
    resolver: yupResolver(formRecruiter),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="level">Nível</label>
        <select id="level" {...register("level")}>
          <option value="junior">Nível Junior</option>
          <option value="pleno">Nível Pleno</option>
          <option value="senior">Nível Sênior</option>
        </select>

        <label htmlFor="stacks">Tecnologias</label>
        <input
          type="text"
          id="stacks"
          placeholder="Digite suas tecnologias"
          // onChange={(event) => setStacks(event.target.value)}
          {...register("stacks")}
        />
        {/* <p>{errors.name?.message}</p> */}

        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          placeholder="Digite sua bio"
          {...register("bio")}
        />

        <label htmlFor="social">Link Social</label>
        <input
          type="text"
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

export default DevForm;
