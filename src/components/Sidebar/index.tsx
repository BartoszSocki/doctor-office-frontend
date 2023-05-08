import { useNavigate } from "react-router-dom";
import SidebarLink from "./SidebarElems/SidebarLink";
import "./style.css";
import SidebarButton from "./SidebarElems/SidebarButton";
import useAuth from "@Hooks/useAuth";
import SidebarDoctor from "./SidebarDoctor";
import SidebarClient from "./SidebarClient";

const Sidebar = () => {
  const navigate = useNavigate();
  const { role } = useAuth();

  return (
    <>
      {role === "DOCTOR" ? (
        <SidebarDoctor />
      ) : role === "CLIENT" ? (
        <SidebarClient />
      ) : null}
    </>
  );
};

export default Sidebar;
