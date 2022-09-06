import { useState } from "react";
import { useContext } from "react";
import { RecruiterContext } from "../../providers/Recruiter/RecruiterContext";
import { Container, Form, Header } from "./style";

const EditModalProfileDev = () => {
  const { editProfileDev, editModalDev, setEditModalDev } =
    useContext(RecruiterContext);
  const [editDev, setEditDev] = useState("");

  const handleEditDev = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editProfileDev(editDev);
  };
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
        <Form onSubmit={handleEditDev}>
          <div className="divModal">
            <div className="formdev">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={editModalDev?.name}
                onChange={(event) => setEditDev(event.target.value)}
              />

              <label htmlFor="local">Local</label>
              <input
                type="text"
                id="local"
                value={editModalDev?.local}
                onChange={(event) => setEditDev(event.target.value)}
              />

              <label htmlFor="empreAtual">Empresa Atual</label>
              <input
                type="text"
                id="empreAtual"
                value={editModalDev?.empre_atual}
                onChange={(event) => setEditDev(event.target.value)}
              />

              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="oi"
                value={editModalDev?.email}
                onChange={(event) => setEditDev(event.target.value)}
              />

              <label htmlFor="stacks">Stacks</label>
              <input
                type="text"
                id="stacks"
                value={editModalDev?.stacks}
                onChange={(event) => setEditDev(event.target.value)}
              />
            </div>

            <div className="formdev2">
              <img className="perfilDev" src="perfil.svg" alt="Perfil Dev" />
              <label htmlFor="title">Título / Objetivo</label>
              <input
                type="text"
                id="title"
                value={editModalDev?.title}
                onChange={(event) => setEditDev(event.target.value)}
              />

              <label htmlFor="url">Escolher url</label>
              <input
                type="text"
                id="url"
                value={editModalDev?.social}
                onChange={(event) => setEditDev(event.target.value)}
              />

              <label htmlFor="resumo">Resumo</label>
              <textarea
                id="resumo"
                value={editModalDev?.resumo}
                onChange={(event) => setEditDev(event.target.value)}
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
