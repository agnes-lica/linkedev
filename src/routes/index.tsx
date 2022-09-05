import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DevDashboard from "../pages/DevDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import Login from "../pages/login";
import RecruiterForm from "../components/RegisterRecruiterForm";
import RegisterDevRecPage from "../components/RegisterDevRecPage";
import DevForm from "../components/RegisterDevForm";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RecruiterForm />} />
      <Route path="/register2" element={<DevForm />} />
      <Route path="/teste" element={<RegisterDevRecPage />} />

      <Route path="/devDashboard" element={<DevDashboard />} />
      <Route path="/recruiterDashboard" element={<RecruiterDashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesApplication;
