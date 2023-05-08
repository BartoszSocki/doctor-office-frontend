import type SidebarButtonProps from "@Interfaces/SidebarButtonProps";
import "./style.css";

const SidebarButton = ({ name, onClickHandler }: SidebarButtonProps) => {
  return (
    <>
      <li>
        <button className="sidebar-button" onClick={() => onClickHandler()}>
          <p>{name}</p>
        </button>
      </li>
    </>
  );
};

export default SidebarButton;
