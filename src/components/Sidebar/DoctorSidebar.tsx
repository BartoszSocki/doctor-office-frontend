import SidebarLink from "./SidebarElems/SidebarLink";

import "./style.css";

const DoctorSidebar = () => {
  return (
    <section className="sidebar__links">
      <ul className="sidebar__links__list">
        <SidebarLink
          name={"⚕️ visit planner"}
          to={"/dashboard/doctor/scheduled-visits"}
          key={"a"}
        />
        <SidebarLink name={"🩺 patients"} to={"/dashboard/clients"} key={"b"} />
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
  );
};

export default DoctorSidebar;
