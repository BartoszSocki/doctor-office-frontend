import "./style.css";

const CreateButton = ({ children, onClick }: any) => {
  return (
    <button className="btn-create" onClick={onClick}>
      {children}
    </button>
  );
};

export default CreateButton;
