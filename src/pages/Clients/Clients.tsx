import type ClientData from "@Interfaces/ClientData";
import { useLoaderData, useNavigate } from "react-router-dom";
import Client from "./Client";
import ClientsList from "./ClientsList";

import "./style.css";

const Clients = () => {
  const navigate = useNavigate();
  const res = useLoaderData() as any;
  const clients = res.data as ClientData[];

  return (
    <>
      <h1 className="clients__header">Clients</h1>
      <ClientsList>
        {clients.map((c: ClientData) => {
          const onNotes = () => {
            navigate(`/dashboard/notes/${c.id}`);
          };
          const onVisits = () => {
            navigate(`/dashboard/doctor/planned-visits/${c.id}`);
          };

          return (
            <Client
              client={c}
              onNotes={onNotes}
              onVisits={onVisits}
              key={c.id}
            />
          );
        })}
      </ClientsList>
    </>
  );
};

export default Clients;
