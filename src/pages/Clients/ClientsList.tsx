import EditButton from "@Components/Buttons/EditButton";

import "./style.css";

const ClientListHeader = () => {
  return (
    <li className="client">
      <b>name</b>
      <b>surname</b>
      <div />
      <EditButton style={{ visibility: "hidden" }}>notes</EditButton>
      <EditButton style={{ visibility: "hidden" }}>visits</EditButton>
    </li>
  );
};

const ClientsList = ({ children }: any) => {
  return (
    <ul className="clients__list">
      <ClientListHeader />
      {children}
    </ul>
  );
};

export default ClientsList;
