import EditButton from "@Components/Buttons/EditButton";
import type ClientData from "@Interfaces/ClientData";

import "./style.css";

const Client = (props: ClientData & any) => {
  const { name, surname } = props.client;
  const { onNotes, onVisits } = props;

  return (
    <li className="client">
      <div>{name}</div>
      <div>{surname}</div>
      <div />
      <EditButton onClick={onNotes}>notes</EditButton>
      <EditButton onClick={onVisits}>visits</EditButton>
    </li>
  );
};

export default Client;
