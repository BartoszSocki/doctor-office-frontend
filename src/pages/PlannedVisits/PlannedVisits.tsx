import { getToken } from "@Utils/TokenUtils";
import "./style.css";

import axios from "axios";
import usePlannedVisits from "@Hooks/usePlannedVisits";
import useAuth from "@Hooks/useAuth";
import PlannedVisitListElem from "@Components/ListElem/PlannedVisitListElem";
import { useNavigate } from "react-router-dom";
import { deleteRequest } from "@Utils/FetchUtils";

const PlannedVisits = () => {
  const { plannedVisits } = usePlannedVisits();
  const { role } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="planned-visits">
      {plannedVisits.map((p) => {
        const URL = (p as any)._links.self.href as string;
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
