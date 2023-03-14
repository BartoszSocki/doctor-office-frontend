import './style.css';
import { Link } from "react-router-dom";

type SidebarElemProps = {
  name: String;
  to?: any; // TODO
}

const SidebarElem = ({name, to}: SidebarElemProps) => {
  return (<>
    <li>
      <Link className="sidebar-elem-wrapper sidebar-elem-link" to={to}>
        <p>{name}</p>
      </Link>
    </li>
  </>);
}

export default SidebarElem;