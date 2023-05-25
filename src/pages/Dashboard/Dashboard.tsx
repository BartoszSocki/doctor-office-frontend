import Sidebar from "@Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import "./style.css";

const Dashboard = () => {
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
