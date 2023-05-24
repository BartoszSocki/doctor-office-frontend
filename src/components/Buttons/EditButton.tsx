import type IAppButtonProps from "@Interfaces/IAppButtonProps";
import "./style.css";

const EditButton = ({ children, onClick, ...rest }: IAppButtonProps) => {
  return (
    <button className="app-btn app-btn--edit" onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default EditButton;
