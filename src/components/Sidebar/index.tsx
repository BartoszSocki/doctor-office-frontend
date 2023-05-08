import { useNavigate } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import "./style.css";
import SidebarButton from "./SidebarButton";
import useAuth from "@Hooks/useAuth";

const Sidebar = () => {
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
            name={"⚕️ doctor office"}
            to={"/appointement-planner"}
            key={"a"}
          />
          <SidebarLink name={"🩺 patients"} to={""} key={"b"} />
          <SidebarLink name={"📂 patients documentation"} to={""} key={"c"} />
        </ul>
      </section>

      <div className="sidebar-space" />

      <section className="sidebar-footer">
        <ul className="sidebar-body-flex">
          <SidebarLink name={"⚙️ preferences"} to={""} key={"aa"} />
          <SidebarButton
            name={"🔒 log out"}
            key={"bb"}
            onClickHandler={() => logout(() => navigate("/login"))}
          />
          {/* <SidebarButton /> */}
          {/* <button onClick={() => logout(() => naviagte("/login"))}>log out</button> */}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
