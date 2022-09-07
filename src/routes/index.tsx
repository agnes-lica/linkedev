import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DevDashboard from "../pages/DevDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import Login from "../pages/login";
import RegisterDevRecPage from "../components/RegisterDevRecPage";
import EditModalPerfilDev from "../components/EditModalPerfilDev";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/options" element={<RegisterDevRecPage />} />

      <Route path="/devDashboard" element={<DevDashboard />} />
      <Route path="/recruiterDashboard" element={<RecruiterDashboard />} />

      <Route path="/teste" element={<EditModalPerfilDev />} />
    </Routes>
  );
};

export default RoutesApplication;
