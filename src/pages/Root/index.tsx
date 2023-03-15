import { Outlet } from "react-router-dom";
import Sidebar from "@Components/Sidebar";
import "./style.css";

const Root = () => {
  return (
    <div className="root-screen-split">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Root;
