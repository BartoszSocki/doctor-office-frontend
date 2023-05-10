import EditButton from "@Components/Buttons/EditButton";
import ListElem from "./ListElem";
import "./style.css";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const NoteListElem = (props: NoteData & any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { name, content, dateOfCreation, dateOfModification, onEdit } = props;
  const handleExpand = () => {
    setIsCollapsed((v) => !v);
  };

  return (
    <ListElem>
      <div className="note-wrapper">
        <section className="note-info">
          <div className="note-collapse" onClick={handleExpand}>
            {isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          <div className="note-name">{name}</div>
          <div className="list-elem-space" />
          <div className="note-date-of-creation">{dateOfCreation}</div>
          <div className="note-date-of-modification">{dateOfModification}</div>
          <nav className="list-elem-actions">
            <EditButton onClick={onEdit}>edit</EditButton>
          </nav>
        </section>
        {isCollapsed ? (
          <section className="note-content">{content}</section>
        ) : null}
      </div>
    </ListElem>
  );
};

export default NoteListElem;
