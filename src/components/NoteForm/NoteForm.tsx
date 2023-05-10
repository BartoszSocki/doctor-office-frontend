import EditButton from "@Components/Buttons/EditButton";
import RemoveButton from "@Components/Buttons/RemoveButton";
import { useState } from "react";
import "./style.css";

const NoteForm = (props: any) => {
  const { name, content } = props;
  const { onSave, onCancel } = props;

  const [newContent, setNewContent] = useState<string>(content);
  const [newName, setNewName] = useState<string>(name);

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
        <EditButton
          onClick={() => onSave({ name: newName, content: newContent })}
        >
          save
        </EditButton>
        <RemoveButton onClick={onCancel}>cancel</RemoveButton>
      </div>
    </div>
  );
};

export default NoteForm;
