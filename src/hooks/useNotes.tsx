import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";
import { getToken } from "@Utils/TokenUtils";

const URL = {
  DOCTOR: import.meta.env.VITE_API_URL + "/api/doctor/notes",
  CLIENT: "",
  ANONYMOUS: "",
};

const useNotes = () => {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const { role } = useAuth();

  const fetchNotes = async () => {
    const res = await axios.get(URL[role], {
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    const fetchedNotes = res.data._embedded.notes;

    setNotes(fetchedNotes);
  };

  useEffect(() => {
    void fetchNotes();
  }, []);

  return { notes };
};

export default useNotes;
