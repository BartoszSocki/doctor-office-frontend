import type SidebarLinkProps from "@Interfaces/SidebarLinkProps";
import "./style.css";
import { Link } from "react-router-dom";

const SidebarLink = ({ name, to }: SidebarLinkProps) => {
  return (
    <>
      <li>
        <Link className="sidebar-elem-wrapper sidebar-elem-link" to={to}>
          <p>{name}</p>
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
