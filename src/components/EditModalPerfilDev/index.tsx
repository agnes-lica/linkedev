import { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/User/UserContext";
import * as yup from "yup";
import { Container, Form, Header } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalContext } from "../../providers/Global/GlobalContext";

interface IEditModallProps {
  name: string;
  email: string;
  title: string;
  stacks: string[];
  bio: string;
  avatar_url: string;
}

const EditModalProfileDev = () => {
  const { editProfileDev, setEditModalDev, editModalDev, user, setUser } =
    useContext(UserContext);
  const { handleImageError } = useContext(GlobalContext);
  console.log("user", user);

  const formEditDev = yup.object().shape({
    name: yup.string().optional(),
    email: yup.string().email("email inválido").optional(),
    title: yup.string().optional(),
    stacks: yup.string().optional(),
    avatar_url: yup.string().url("jpg ou png").optional(),
    bio: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEditModallProps>({
    resolver: yupResolver(formEditDev),
    // defaultValues: {
    //   name: user?.name,
    //   email: user?.email,
    //   title: user?.title,
    //   stacks: user?.stacks,
    //   avatar_url: user?.avatar_url,
    //   resumo: user?.resumo,
    // },
  });

  // const dev = { name: user?.name, email: user?.email };

  return (
    <Container>
      <div className="modal">
        <Header>
          <img
            className="vectorBack"
            src="./vector_edit.svg"
            alt="Voltar"
            onClick={() => setEditModalDev(null)}
          />
          <h2>Editar Perfil</h2>
        </Header>
        <Form onSubmit={handleSubmit(editProfileDev)}>
          <div className="divModal">
            <div className="formdev">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                defaultValue={user?.name}
                {...register("name")}
              />
              <p>{errors.name?.message}</p>

              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                defaultValue={user?.email}
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
              <label htmlFor="title">Título / Objetivo</label>
              <input
                type="text"
                id="title"
                defaultValue={user?.title}
                {...register("title")}
              />
              <p>{errors.title?.message}</p>
              <label htmlFor="stacks">Stacks</label>
              <input
                type="text"
                id="stacks"
                defaultValue={user?.stacks}
                {...register("stacks")}
              />
              <p>{errors.stacks?.message}</p>
            </div>

            <div className="formdev2">
              {/* <img className="perfilDev" src="perfil.svg" alt="Perfil Dev" /> */}
              <img
                className="perfilDev"
                defaultValue={user?.avatar_url}
                src={user?.avatar_url}
                alt="Perfil Dev"
                onError={handleImageError}
              />

              <label htmlFor="url">Escolher url</label>
              <input
                type="text"
                id="url"
                defaultValue={user?.avatar_url}
                {...register("avatar_url")}
              />

              <p>{errors.avatar_url?.message}</p>

              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                defaultValue={user?.resumo}
                {...register("bio")}
              />
              <p>{errors.bio?.message}</p>
            </div>
          </div>
          <div className="divButton">
            <button className="buttonEdit" type="submit">
              Atualizar
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default EditModalProfileDev;
