import { Container, Form, Header } from "./style";

const EditModalPerfilDev = () => {
  return (
    <Container>
      <div className="modal">
        <Header>
          <img className="vectorBack" src="./vector_edit.svg" alt="" />
          <h2>Editar Perfil</h2>
        </Header>
        <Form>
          <div className="divModal">
            <div className="formdev">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" />

              <label htmlFor="local">Local</label>
              <input type="text" id="local" />

              <label htmlFor="empreAtual">Empresa Atual</label>
              <input type="text" id="empreAtual" />

              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="oi" />

              <label htmlFor="stacks">Stacks</label>
              <input type="text" id="stacks" />
            </div>

            <div className="formdev2">
              <img className="perfilDev" src="perfil.svg" alt="Perfil Dev" />
              <label htmlFor="title">Título / Objetivo</label>
              <input type="text" id="title" />

              <label htmlFor="url">Escolher url</label>
              <input type="text" id="url" />

              <label htmlFor="resumo">Resumo</label>
              <textarea id="resumo" />
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

export default EditModalPerfilDev;
