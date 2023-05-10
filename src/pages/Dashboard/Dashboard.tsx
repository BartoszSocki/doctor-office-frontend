import Sidebar from "@Components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
import useAuth from "@Hooks/useAuth";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className="dashboard-screen-split">
        <Sidebar />
        <div className="dashboard-right-panel-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
