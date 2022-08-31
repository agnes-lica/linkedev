import { Routes, Route } from "react-router-dom";
import RegisterRecuiter from "../Pages/CadastroRecruiter";
import Login from "../Pages/Login";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<RegisterRecuiter />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RoutesMain;
