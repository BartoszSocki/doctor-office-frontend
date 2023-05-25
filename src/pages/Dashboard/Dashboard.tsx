import Sidebar from "@Components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "@Hooks/useAuth";

import "./style.css";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__screen-split">
        <div className="dashboard__left-panel">
          <Sidebar />
        </div>
        <div className="dashboard__right-panel">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
