import PlannedVisit from "@Components/WeekVisitPlanner/PlannedVisit";
import { useEffect, useState } from "react";
import { getToken } from "@Utils/TokenUtils";
import "./style.css";

import axios from "axios";
import type PlannedVisitProps from "@Interfaces/PlannedVisitProps";

const CLIENT_VISITS_URL =
  import.meta.env.VITE_API_URL + "/api/client/planned-visits";

const CLIENT_SINGLE_VISIT_URL =
  import.meta.env.VITE_API_URL + "/api/client/planned-visits/{}";

const ClientVisits = () => {
  const [links, setLinks] = useState({});
  const [plannedVisits, setPlannedVisits] = useState<PlannedVisitProps[]>([]);

  useEffect(() => {
    const f = async () => {
      const plannedVisitsData = await axios.get(CLIENT_VISITS_URL, {
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
              CLIENT_SINGLE_VISIT_URL.replace("{}", p.id.toString()),
              {
                headers: { Authorization: `Bearer ${getToken()}` },
              }
            );
          };
          return <PlannedVisit plannedVisit={p} onRemove={cancel} key={p.id} />;
        })}
      </div>
    </div>
  );
};

export default ClientVisits;
