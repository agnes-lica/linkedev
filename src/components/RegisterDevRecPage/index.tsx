import { useState } from "react";
import DevForm from "../RegisterDevForm";
import RecruiterForm from "../RegisterRecruiterForm";
import { Container, Div, Header } from "./style";


const RegisterDevRecPage = () => {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(true);

  return (
    <>
      <Container page={page}>
        <Header>
          <img className="logoLinke" src="./logoLinke.svg" alt="LinkeDev" />
        </Header>
        <div className="div">
          <div className="divImgDesktop">
            <img
              className="logoLinke2"
              src="./LogoPC_Dark.svg"
              alt="LinkeDev"
            />
            <h3>A maior plataforma de contratações tech!</h3>
            <img
              className="imgLogin"
              src="./newLogoLinke.svg"
              alt="Logo Page"
            />
          </div>

          <Div>
            <div className="text">
              <h2>Esse é o primeiro passo para uma grande experiência</h2>
              <h4>
                Você é um
                <span
                  onClick={() => {
                    setValue("dev");
                    setPage(false);
                  }}
                >
                  Dev
                </span>
                ou
                <span
                  onClick={() => {
                    setValue("recruiter");
                    setPage(false);
                  }}
                >
                  Recruiter
                </span>
                ?
              </h4>
            </div>
          </Div>
        </div>
        <div className="teste">
          <img className="vector" src="./vector.svg" />
        </div>
      </Container>
      {/* {value == "dev" ? <DevForm /> : <RecruiterForm />} */}

      {value === "dev" && <DevForm />}
      {value === "recruiter" && <RecruiterForm />}
    </>
  );
};
export default RegisterDevRecPage;
