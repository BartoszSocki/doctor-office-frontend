import Sidebar from "@Components/Sidebar";
import useAuth from "@Hooks/useAuth";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <div className="root-screen-split">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
