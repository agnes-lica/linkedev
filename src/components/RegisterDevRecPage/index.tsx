import { useState } from "react";
import DevForm from "../RegisterDevForm";
import RecruiterForm from "../RegisterRecruiterForm";
import { Container } from "./style";
const RegisterDevRecPage = () => {
  const [value, setValue] = useState("");
  return (
    <Container>
      <div className="div">
        <img
          className="divImgPage"
          src="./newLogoLinke.svg"
          alt="Logo LinkeDev"
        ></img>
        <div className="divTeste">
          <img className="logoLinke2" src="./logoLinke.png" alt="LinkeDev" />
          <h2>A maior plataforma de contratações tech!</h2>

          <h3>Esse é o primeiro passo para uma grande experiência</h3>
          <h4>
            Você é um <button onClick={() => {setValue("dev")}}>Dev</button> ou
            <button onClick={() => setValue("recruiter")}>Recruiter</button> ?
          </h4>
          {value == "dev" && <DevForm /> }
          {value == "recruiter" && <RecruiterForm />}
        </div>
      </div>
      <img className="vector" src="./vector.svg" />
    </Container>
  );
};
export default RegisterDevRecPage;
