import "./style.css";
import useAuth from "@Hooks/useAuth";
import DoctorSidebar from "./DoctorSidebar";
import ClientSidebar from "./ClientSidebar";

const Sidebar = () => {
  const { role, isAuthenticated } = useAuth();

  console.log(role, isAuthenticated);

  return (
    <>
      {role === "DOCTOR" ? (
        <DoctorSidebar />
      ) : role === "CLIENT" ? (
        <ClientSidebar />
      ) : null}
    </>
  );
};

export default Sidebar;
