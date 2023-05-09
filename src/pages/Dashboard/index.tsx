import Sidebar from "@Components/Sidebar";
import { Outlet } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
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
