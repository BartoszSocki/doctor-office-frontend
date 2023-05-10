import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getRequest } from "@Utils/FetchUtils";
import type PlannedVisitData from "@Interfaces/PlannedVisitData";

const URL = {
  DOCTOR: import.meta.env.VITE_API_URL + "/api/doctor/planned-visits",
  CLIENT: import.meta.env.VITE_API_URL + "/api/client/planned-visits",
  ANONYMOUS: "",
};

const usePlannedVisits = () => {
  const [plannedVisits, setPlannedVisits] = useState<PlannedVisitData[]>([]);
  const [links, setLinks] = useState([]);
  const { role } = useAuth();

  const fetchPlannedVisits = async () => {
    const res = await getRequest(URL[role]);

    const links = res.data._links;
    const plannedVisits = res.data._embedded.plannedVisits;

    setPlannedVisits(plannedVisits);
    setLinks(links);
  };

  useEffect(() => {
    void fetchPlannedVisits();
  }, []);

  return { plannedVisits, links };
};

export default usePlannedVisits;
