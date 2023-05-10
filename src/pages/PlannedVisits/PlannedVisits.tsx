import usePlannedVisits from "@Hooks/usePlannedVisits";
import useAuth from "@Hooks/useAuth";
import PlannedVisitListElem from "@Components/ListElem/PlannedVisitListElem";
import { deleteRequest } from "@Utils/FetchUtils";
import type PlannedVisitData from "@Interfaces/PlannedVisitData";
import "./style.css";

import { useNavigate } from "react-router-dom";

const PlannedVisits = () => {
  const { plannedVisits } = usePlannedVisits();
  const { role } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="planned-visits">
      {plannedVisits.map((p: PlannedVisitData) => {
        const URL = p._links.self.href as string;
        const cancel = async () => await deleteRequest(URL);
        const newNote = () => navigate(`/dashboard/notes/new/${p.id}`);

        const user =
          role === "CLIENT"
            ? `${p.clientName} ${p.clientSurname}`
            : `dr. ${p.doctorName} ${p.doctorSurname}`;

        return (
          <PlannedVisitListElem
            plannedVisit={{
              ...p,
              user,
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
