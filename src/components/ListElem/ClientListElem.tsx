import EditButton from "@Components/Buttons/EditButton";
import ListElem from "./ListElem";
import type ClientData from "@Interfaces/ClientData";
import "./style.css";

const ClientListElem = (props: ClientData & any) => {
  const { name, surname } = props.client;
  const { onNotes, onVisits } = props;

  return (
    <ListElem>
      <div className="client-name">{name}</div>
      <div className="client-surname">{surname}</div>
      <div className="list-elem-space" />
      <nav className="list-elem-actions">
        <EditButton onClick={onNotes}>notes</EditButton>
        <EditButton onClick={onVisits}>visits</EditButton>
      </nav>
    </ListElem>
  );
};

export default ClientListElem;
