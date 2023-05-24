import type SidebarLinkProps from "@Interfaces/SidebarLinkProps";
import { Link } from "react-router-dom";

import "./style.css";

const SidebarLink = ({ name, to }: SidebarLinkProps) => {
  return (
    <li>
      <Link className="sidebar__elem" to={to}>
        {name}
      </Link>
    </li>
  );
};

export default SidebarLink;
