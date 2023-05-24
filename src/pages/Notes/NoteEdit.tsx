import NoteForm from "@Components/NoteForm/NoteForm";
import { useLoaderData, useNavigate } from "react-router-dom";
import { updateNote } from "@Utils/ApiUtils";

import "./style.css";

const NoteEdit = () => {
  const { data } = useLoaderData() as any;
  const navigate = useNavigate();
  const { content, name, id } = data;

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = async (formData: any) => {
    await updateNote(id as string, formData);
    navigate(-1);
  };

  return (
    <NoteForm
      name={name}
      content={content}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};

export default NoteEdit;
