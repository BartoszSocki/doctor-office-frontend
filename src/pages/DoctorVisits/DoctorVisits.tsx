import PlannedVisit from "@Components/PlannedVisit/PlannedVisit";
import { useEffect, useState } from "react";
import { getToken } from "@Utils/TokenUtils";
import "./style.css";

import axios from "axios";

const DOCTOR_VISITS_URL =
  import.meta.env.VITE_API_URL + "/api/doctor/planned-visits";

const DOCTOR_SINGLE_VISIT_URL =
  import.meta.env.VITE_API_URL + "/api/doctor/planned-visits/{}";

const DoctorVisits = () => {
  const [links, setLinks] = useState({});
  const [plannedVisits, setPlannedVisits] = useState<any[]>([]);

  useEffect(() => {
    const f = async () => {
      const plannedVisitsData = await axios.get(DOCTOR_VISITS_URL, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      const links = plannedVisitsData.data._links;
      const plannedVisits = plannedVisitsData.data._embedded.plannedVisits;
      setLinks(links);
      setPlannedVisits(plannedVisits);
    };

    void f();
  }, []);

  return (
    <div className="planned-visits-wrapper">
      <div className="planned-visits">
        {plannedVisits.map((p) => {
          const cancel = async () => {
            console.log("this");
            await axios.delete(
              DOCTOR_SINGLE_VISIT_URL.replace("{}", p.id.toString()),
              {
                headers: { Authorization: `Bearer ${getToken()}` },
              }
            );
          };
          return (
            <PlannedVisit
              plannedVisit={{
                ...p,
                user: `${p.clientName} ${p.clientSurname}`,
              }}
              onRemove={cancel}
              key={p.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DoctorVisits;
