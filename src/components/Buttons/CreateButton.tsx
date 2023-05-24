import "./style.css";

export interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const CreateButton = (props: IButtonProps) => {
  const { children, onClick, ...rest } = props;
  return (
    <button className="btn-create" onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default CreateButton;
