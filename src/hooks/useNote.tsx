import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";
import { getToken } from "@Utils/TokenUtils";

const URL = {
  DOCTOR: import.meta.env.VITE_API_URL + "/api/doctor/notes/{}",
  CLIENT: "",
  ANONYMOUS: "",
};

const useNote = (id: string) => {
  const [note, setNote] = useState<NoteData>();
  const { role } = useAuth();

  const fetchNote = async () => {
    const res = await axios.get(URL[role].replace("{}", id), {
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    const fetchedNote = res.data;
    setNote(fetchedNote);
  };

  useEffect(() => {
    void fetchNote();
  }, []);

  return note;
};

export default useNote;
