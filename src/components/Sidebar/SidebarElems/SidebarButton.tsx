import "./style.css";

interface ISidebarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const SidebarButton = ({ name, ...rest }: ISidebarButtonProps) => {
  return (
    <li>
      <button className="sidebar__elem" {...rest}>
        {name}
      </button>
    </li>
  );
};

export default SidebarButton;
