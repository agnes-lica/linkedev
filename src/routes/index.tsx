import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";

import LandingPage from "../pages/LandingPage";
import DevDashboard from "../pages/DevDashboard";
import DevInbox from "../pages/DevInbox";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import RecruiterInbox from "../pages/RecruiterInbox";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Singup />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/devDashboard" element={<DevDashboard />} />
        <Route path="/devInbox" element={<DevInbox />} />
        <Route path="/recruiterDashboard" element={<RecruiterDashboard />} />
        <Route path="/recruiterInbox" element={<RecruiterInbox />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default RoutesApplication;
