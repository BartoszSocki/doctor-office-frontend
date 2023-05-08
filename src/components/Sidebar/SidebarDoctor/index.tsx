import { useNavigate } from "react-router-dom";
import SidebarLink from "../SidebarElems/SidebarLink";
import "../style.css";
import SidebarButton from "../SidebarElems/SidebarButton";
import useAuth from "@Hooks/useAuth";

const SidebarDoctor = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="sidebar-wrapper">
      <section className="sidebar-header">
        <p>Menu</p>
      </section>

      <section className="sidebar-body">
        <ul className="sidebar-body-flex">
          <SidebarLink name={"⚕️ doctor's office"} to={""} key={"a"} />
          <SidebarLink name={"🩺 patients"} to={""} key={"b"} />
          <SidebarLink name={"📂 patients documentation"} to={""} key={"c"} />
          <SidebarLink name={"📅 planned visits"} to={""} key={"c"} />
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

export default SidebarDoctor;
