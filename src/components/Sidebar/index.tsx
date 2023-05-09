import "./style.css";
import useAuth from "@Hooks/useAuth";
import SidebarDoctor from "./SidebarDoctor";
import SidebarClient from "./SidebarClient";

const Sidebar = () => {
  const { role, isAuthenticated } = useAuth();

  console.log(role, isAuthenticated);

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
