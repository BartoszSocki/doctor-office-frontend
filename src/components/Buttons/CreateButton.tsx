import type IAppButtonProps from "@Interfaces/IAppButtonProps";
import "./style.css";

const CreateButton = ({ children, onClick, ...rest }: IAppButtonProps) => {
  return (
    <button className="app-btn app-btn--create" onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default CreateButton;
