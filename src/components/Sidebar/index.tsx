import SidebarElem from "./SidebarElem";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <section className="sidebar-header">
        <p>Menu</p>
      </section>

      <section className="sidebar-body">
        <ul className="sidebar-body-flex">
          <SidebarElem name={"⚕️ doctor office"} to={"/appointement-planner"} key={"a"} />
          <SidebarElem name={"🩺 patients"} key={"b"} />
          <SidebarElem name={"📂 patients documentation"} key={"c"} />

        </ul>
      </section>

      <div className="sidebar-space" />

      <section className="sidebar-footer">
        <ul className="sidebar-body-flex">
          <SidebarElem name={"⚙️ preferences"} key={"aa"} />
          <SidebarElem name={"🔒 log out"} key={"bb"} />
        </ul>
      </section>
    </div>
  )
}

export default Sidebar;