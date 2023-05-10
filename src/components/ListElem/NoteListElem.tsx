import EditButton from "@Components/Buttons/EditButton";
import ListElem from "./ListElem";
import "./style.css";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const NoteListElem = (props: NoteData) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { id, name, content, dateOfCreation, dateOfModification } = props;
  const handleExpand = () => {
    setIsCollapsed((v) => !v);
  };

  return (
    <ListElem>
      <div className="note-wrapper">
        <section className="note-info">
          <div onClick={handleExpand}>
            {isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          <div>{name}</div>
          <div className="list-elem-space" />
          <div>{dateOfCreation}</div>
          <div>{dateOfModification}</div>
          <nav className="list-elem-actions">
            <EditButton>edit</EditButton>
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
