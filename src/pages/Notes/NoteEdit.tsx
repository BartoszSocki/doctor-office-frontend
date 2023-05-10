import EditButton from "@Components/Buttons/EditButton";
import RemoveButton from "@Components/Buttons/RemoveButton";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { getToken } from "@Utils/TokenUtils";

const NoteEdit = () => {
  const data = useLoaderData() as any;
  const navigate = useNavigate();
  const { content, name, id } = data.data;
  const [newContent, setNewContent] = useState<string>(content);
  const [newName, setNewName] = useState<string>(name);

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = async () => {
    await axios.put(
      `${import.meta.env.VITE_API_URL}/api/doctor/notes/${id as string}`,
      {
        name: newName,
        content: newContent,
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    navigate(-1);
  };

  return (
    <div className="note-edit-wrapper">
      <input
        className="note-edit-name"
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
      />
      <textarea
        className="note-edit-content"
        onChange={(e) => setNewContent(e.target.value)}
        value={newContent}
      />
      <div className="note-edit-actions">
        <EditButton onClick={async () => await handleSave()}>save</EditButton>
        <RemoveButton onClick={handleCancel}>cancel</RemoveButton>
      </div>
    </div>
  );
};

export default NoteEdit;
