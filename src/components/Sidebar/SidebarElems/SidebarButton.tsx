import type SidebarButtonProps from "@Interfaces/SidebarButtonProps";
import "./style.css";

const SidebarButton = ({ name, onClickHandler }: SidebarButtonProps) => {
  return (
    <li>
      <button className="sidebar__elem" onClick={() => onClickHandler()}>
        {name}
      </button>
    </li>
  );
};

export default SidebarButton;
