import EditButton from "@Components/Buttons/EditButton";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import "./style.css";

const Note = (props: NoteData & any) => {
  const { name, content, dateOfCreation, dateOfModification, onEdit } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleExpand = () => setIsCollapsed((v) => !v);

  return (
    <li className="note">
      <div className="note-collapse" onClick={handleExpand}>
        {isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      <div>{name}</div>
      <div />
      <em>{dateOfCreation}</em>
      <em>{dateOfModification}</em>
      <EditButton onClick={onEdit}>edit</EditButton>
      {isCollapsed ? <div className="note__content">{content}</div> : null}
    </li>
  );
};

export default Note;
