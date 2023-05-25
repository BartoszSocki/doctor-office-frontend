import NoteForm from "@Components/NoteForm/NoteForm";
import { useNavigate, useParams } from "react-router-dom";
import { DoctorAPI } from "@Utils/ApiUtils";

import "./style.css";

const NoteCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = async (formData: any) => {
    console.log(formData);

    await DoctorAPI.post(`/notes/planned-visit/${id as string}`, formData);
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
