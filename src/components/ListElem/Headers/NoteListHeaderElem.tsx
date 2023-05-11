import { FiChevronUp } from "react-icons/fi";
import ListElem from "../ListElem";
import "../style.css";
import EditButton from "@Components/Buttons/EditButton";

const NoteListHeaderElem = () => {
  return (
    <ListElem>
      <div className="hidden note-collapse">
        <FiChevronUp />
      </div>
      <div className="note-name">
        <b>Name</b>
      </div>
      <div className="list-elem-space" />
      <div className="note-date-of-creation">
        <b>Creation</b>
      </div>
      <div className="note-date-of-modification">
        <b>Modification</b>
      </div>
      <nav className="hidden list-elem-actions">
        <EditButton>edit</EditButton>
      </nav>
    </ListElem>
  );
};

export default NoteListHeaderElem;
