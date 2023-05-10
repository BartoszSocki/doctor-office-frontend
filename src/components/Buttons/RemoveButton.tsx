import "./style.css";

const RemoveButton = ({ children, onClick }: any) => {
  return (
    <button className="btn-remove" onClick={onClick}>
      {children}
    </button>
  );
};

export default RemoveButton;
