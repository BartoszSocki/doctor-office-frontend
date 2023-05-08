import useAuth from "@Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const naviagte = useNavigate();

  return (
    <div>
      <button onClick={() => logout(() => naviagte("/login"))}>log out</button>
    </div>
  );
};

export default Dashboard;
