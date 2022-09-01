import { Routes, Route } from "react-router-dom";
import RegisterRecuiter from "../Pages/CadastroRecruiter";
import Dashboard from "../Pages/dashboard";
import Login from "../Pages/Login";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<RegisterRecuiter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default RoutesMain;
