import useAuth from "@Hooks/useAuth";
import PlannedVisitListElem from "@Components/ListElem/PlannedVisitListElem";
import type PlannedVisitData from "@Interfaces/PlannedVisitData";
import { useLoaderData, useNavigate } from "react-router-dom";
import PlannedVisitsListHeaderElem from "@Components/ListElem/Headers/PlannedVisitsListHeaderElem";
import axios from "axios";

import "./style.css";

const PlannedVisits = () => {
  const res = useLoaderData() as any;
  const plannedVisits = res.data._embedded?.plannedVisits ?? [];

  const { role } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="planned-visits">
      <h1 className="planned-visits-header">Planned Visits</h1>
      <PlannedVisitsListHeaderElem role={role} />
      {plannedVisits.map((p: PlannedVisitData) => {
        const URL = p._links.self.href as string;
        const cancel = async () => await axios.delete(URL);
        const newNote = () => navigate(`/dashboard/notes/new/${p.id}`);

        const user =
          role === "DOCTOR"
            ? `${p.clientName} ${p.clientSurname}`
            : `dr. ${p.doctorName} ${p.doctorSurname}`;

        return (
          <PlannedVisitListElem
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
    </div>
  );
};

export default PlannedVisits;
