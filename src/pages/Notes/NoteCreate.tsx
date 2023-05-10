import { getToken } from "@Utils/TokenUtils";
import NoteForm from "@Components/NoteForm/NoteForm";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

const NoteCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = async (formData: any) => {
    console.log(formData);

    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/doctor/notes/planned-visit/${
        id as string
      }`,
      formData,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    navigate(-1);
  };

  return (
    <NoteForm
      name={"new note..."}
      content={"content..."}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};

export default NoteCreate;
