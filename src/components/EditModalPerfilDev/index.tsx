import { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IEditDev, UserContext } from "../../providers/User/UserContext";
import * as yup from "yup";
import { Container, Form, Header } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalContext } from "../../providers/Global/GlobalContext";

const EditModalProfileDev = () => {
  const { editProfileDev, setEditModalDev, user } = useContext(UserContext);
  const { handleImageError } = useContext(GlobalContext);
  // console.log("user", user);

  const formEditDev = yup.object().shape({
    name: yup.string().optional(),
    email: yup.string().email("email inválido").optional(),
    title: yup.string().optional(),
    stacks: yup.string().optional(),
    avatar_URL: yup.string().url("jpg ou png").optional(),
    bio: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditDev>({
    resolver: yupResolver(formEditDev),
  });

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
              <img
                className="perfilDev"
                defaultValue={user?.avatar_URL}
                src={user?.avatar_URL}
                alt="Perfil Dev"
                onError={handleImageError}
              />

              <label htmlFor="url">Escolher url</label>
              <input
                type="text"
                id="url"
                defaultValue={user?.avatar_URL}
                {...register("avatar_URL")}
              />

              <p>{errors.avatar_URL?.message}</p>

              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                defaultValue={user?.bio}
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
