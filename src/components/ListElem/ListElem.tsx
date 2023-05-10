import "./style.css";

const ListElem = (props: any) => {
  return <div className="list-elem-wrapper">{props.children}</div>;
};

export default ListElem;
