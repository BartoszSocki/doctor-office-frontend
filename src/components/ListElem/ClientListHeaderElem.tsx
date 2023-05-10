import ListElem from "./ListElem";
import "./style.css";

const ClientListHeaderElem = () => {
  return (
    <ListElem>
      <div className="client-name">
        <b>Name</b>
      </div>
      <div className="client-surname">
        <b>Surname</b>
      </div>
      <div className="list-elem-space" />
    </ListElem>
  );
};

export default ClientListHeaderElem;
