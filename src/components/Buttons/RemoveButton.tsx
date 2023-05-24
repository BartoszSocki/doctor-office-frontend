import type IAppButtonProps from "@Interfaces/IAppButtonProps";
import "./style.css";

const RemoveButton = ({ children, onClick, ...rest }: IAppButtonProps) => {
  return (
    <button className="app-btn app-btn--remove" onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default RemoveButton;
