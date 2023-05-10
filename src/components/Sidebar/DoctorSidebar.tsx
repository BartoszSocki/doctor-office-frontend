import { useNavigate } from "react-router-dom";
import SidebarLink from "./SidebarElems/SidebarLink";
import "./style.css";
import SidebarButton from "./SidebarElems/SidebarButton";
import useAuth from "@Hooks/useAuth";

const DoctorSidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="sidebar-wrapper">
      <section className="sidebar-header">
        <p>Menu</p>
      </section>

      <section className="sidebar-body">
        <ul className="sidebar-body-flex">
          <SidebarLink
            name={"⚕️ visit planner"}
            to={"/dashboard/visit-planner"}
            key={"a"}
          />
          <SidebarLink
            name={"🩺 patients"}
            to={"/dashboard/clients"}
            key={"b"}
          />
          <SidebarLink
            name={"📂 patients documentation"}
            to={"/dashboard/notes"}
            key={"c"}
          />
          <SidebarLink
            name={"📅 planned visits"}
            to={"/dashboard/doctor/planned-visits"}
            key={"d"}
          />
        </ul>
      </section>

      <div className="sidebar-space" />

      <section className="sidebar-footer">
        <ul className="sidebar-body-flex">
          {/* <SidebarLink name={"⚙️ preferences"} to={""} key={"aa"} /> */}
          <SidebarButton
            name={"🔒 log out"}
            key={"bb"}
            onClickHandler={() => logout(() => navigate("/login"))}
          />
        </ul>
      </section>
    </div>
  );
};

export default DoctorSidebar;
