import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecruiterContext } from "../../providers/Recruiter/RecruiterContext";
import * as yup from "yup";
import { Container, Form, Header } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";

interface IEditModallProps {
  name: string;
  email: string;
  title: string;
  stacks: string[];
  resumo: string;
  avatar_URL: string;
}

const EditModalProfileDev = () => {
  const { editProfileDev, editModalDev, setEditModalDev, user } =
    useContext(RecruiterContext);

  const formEditDev = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("email inválido"),
    title: yup.string(),
    stacks: yup.string(),
    avatar_URL: yup.string().url("jpg ou png"),
    resumo: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditModallProps>({
    resolver: yupResolver(formEditDev),
  });

  // const handleEditDev = (event: React.FormEvent<HTMLFormElement>) => {
  //   console.log(event);
  //   event.preventDefault();
  //   editProfileDev(editModalDev);
  // };
  // value={editModalDev?.name}
  // onChange={(event) => setEditDev(event.target.value)}

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

              <label htmlFor="title">Título / Objetivo</label>
              <input
                type="text"
                id="title"
                defaultValue={user?.title}
                {...register("title")}
              />

              <label htmlFor="stacks">Stacks</label>
              <input
                type="text"
                id="stacks"
                defaultValue={user?.stacks}
                {...register("stacks")}
              />
            </div>

            <div className="formdev2">
              {/* <img className="perfilDev" src="perfil.svg" alt="Perfil Dev" /> */}
              <img className="perfilDev" src={user?.avatar_URL} alt="Perfil Dev" />

              <label htmlFor="url">Escolher url</label>
              <input
                type="text"
                id="url"
                defaultValue={user?.avatar_URL}
                {...register("avatar_URL")}
              />

              <label htmlFor="resumo">Resumo</label>
              <textarea
                id="resumo"
                defaultValue={user?.resumo}
                {...register("resumo")}
              />
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
