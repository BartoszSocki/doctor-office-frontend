import { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";
import { getToken } from "@Utils/TokenUtils";

const URL = {
  DOCTOR: import.meta.env.VITE_API_URL + "/api/doctor/planned-visits",
  CLIENT: import.meta.env.VITE_API_URL + "/api/client/planned-visits",
  ANONYMOUS: "",
};

const usePlannedVisits = () => {
  const [plannedVisits, setPlannedVisits] = useState([]);
  const [links, setLinks] = useState([]);
  const { role } = useAuth();

  const fetchPlannedVisits = async () => {
    const res = await axios.get(URL[role], {
      headers: { Authorization: `Bearer ${getToken()}` },
    });

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
