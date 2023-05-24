import ClientListElem from "@Components/ListElem/ClientListElem";
import ClientListHeaderElem from "@Components/ListElem/Headers/ClientListHeaderElem";
import type ClientData from "@Interfaces/ClientData";
import { useLoaderData, useNavigate } from "react-router-dom";

import "./style.css";

const ClientsList = () => {
  const navigate = useNavigate();
  const res = useLoaderData() as any;
  const clients = res.data as ClientData[];

  return (
    <div>
      <h1 className="clients-header">Clients</h1>
      <ClientListHeaderElem />
      {clients.map((c: ClientData) => {
        const onNotes = () => {
          navigate(`/dashboard/notes/${c.id}`);
        };
        const onVisits = () => {
          navigate(`/dashboard/doctor/planned-visits/${c.id}`);
        };

        return (
          <ClientListElem
            client={c}
            onNotes={onNotes}
            onVisits={onVisits}
            key={c.id}
          />
        );
      })}
    </div>
  );
};

export default ClientsList;
