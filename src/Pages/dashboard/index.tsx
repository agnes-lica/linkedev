import { useContext } from "react";
import { RecruiterContext } from "../../Context/RecruiterContext";

const Dashboard = () => {
  const { user, setUser } = useContext(RecruiterContext);
  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
};

export default Dashboard;
