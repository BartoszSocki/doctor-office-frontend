import { getToken } from "@Utils/TokenUtils";
import NoteForm from "@Components/NoteForm/NoteForm";

import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const NoteEdit = () => {
  const data = useLoaderData() as any;
  const navigate = useNavigate();
  const { content, name, id } = data.data;

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = async (formData: any) => {
    await axios.put(
      `${import.meta.env.VITE_API_URL}/api/doctor/notes/${id as string}`,
      formData,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
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
