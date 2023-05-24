import { Link, type LinkProps } from "react-router-dom";

import "./style.css";

interface ISidebarLinkProps
  extends LinkProps,
    React.RefAttributes<HTMLAnchorElement> {
  name: string;
}

const SidebarLink = ({ name, ...rest }: ISidebarLinkProps) => {
  return (
    <li>
      <Link className="sidebar__elem" {...rest}>
        {name}
      </Link>
    </li>
  );
};

export default SidebarLink;
