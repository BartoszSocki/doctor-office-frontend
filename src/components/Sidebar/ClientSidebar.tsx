import SidebarLink from "./SidebarElems/SidebarLink";

import "./style.css";

const ClientSidebar = () => {
  return (
    <>
      <section className="sidebar__header">
        <p>Menu</p>
      </section>

      <section className="sidebar__links">
        <ul className="sidebar__links__list">
          <SidebarLink
            name={"👨‍⚕️ doctors"}
            to={"/dashboard/doctors"}
            key={"b"}
          />
          <SidebarLink
            name={"📅 planned visits"}
            to={"/dashboard/client/planned-visits"}
            key={"c"}
          />
        </ul>
      </section>
    </>
  );
};

export default ClientSidebar;
