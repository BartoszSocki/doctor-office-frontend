import useAuth from "@Hooks/useAuth";
import DoctorSidebar from "./DoctorSidebar";
import ClientSidebar from "./ClientSidebar";
import SidebarButton from "./SidebarElems/SidebarButton";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Sidebar = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(() => navigate("/login"));
  };

  return (
    <>
      <h1 className="sidebar__header">Menu</h1>

      {role === "DOCTOR" ? (
        <DoctorSidebar />
      ) : role === "CLIENT" ? (
        <ClientSidebar />
      ) : null}

      <div className="sidebar__space" />

      <section className="sidebar__footer">
        <SidebarButton name={"🔒 log out"} onClick={handleLogout} />
      </section>
    </>
  );
};

export default Sidebar;
