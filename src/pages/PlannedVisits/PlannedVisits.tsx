import "./style.css";

import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import useAuth from "@Hooks/useAuth";
import PlannedVisit from "@Pages/PlannedVisits/PlannedVisit";

import PlannedVisitsList from "./PlannedVisitsList";

import type PlannedVisitData from "@Interfaces/PlannedVisitData";

const PlannedVisits = () => {
  const res = useLoaderData() as any;
  const plannedVisits = res.data._embedded?.plannedVisits ?? [];

  const { role } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="planned-visits__header">Planned Visits</h1>
      <PlannedVisitsList>
        {plannedVisits.map((p: PlannedVisitData) => {
          const URL = p._links.self.href as string;
          const cancel = async () => await axios.delete(URL);
          const newNote = () => navigate(`/dashboard/notes/new/${p.id}`);

          const user =
            role === "DOCTOR"
              ? `${p.clientName} ${p.clientSurname}`
              : `dr. ${p.doctorName} ${p.doctorSurname}`;

          return (
            <PlannedVisit
              plannedVisit={{
                ...p,
                user,
                role,
              }}
              onRemove={cancel}
              onCreate={newNote}
              key={p.id}
            />
          );
        })}
      </PlannedVisitsList>
    </>
  );
};

export default PlannedVisits;
