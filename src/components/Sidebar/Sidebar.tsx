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
      {role === "DOCTOR" ? (
        <DoctorSidebar />
      ) : role === "CLIENT" ? (
        <ClientSidebar />
      ) : null}

      <div className="sidebar__space" />

      <section className="sidebar__footer">
        <SidebarButton
          name={"🔒 log out"}
          key={"bb"}
          onClickHandler={handleLogout}
        />
      </section>
    </>
  );
};

export default Sidebar;
