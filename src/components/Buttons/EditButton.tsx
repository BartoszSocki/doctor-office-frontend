import "./style.css";

const EditButton = ({ children, onClick }: any) => {
  return (
    <button className="btn-edit" onClick={onClick}>
      {children}
    </button>
  );
};

export default EditButton;
