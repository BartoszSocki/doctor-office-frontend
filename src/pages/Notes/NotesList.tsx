import "./style.css";

import { FiChevronDown } from "react-icons/fi";

import EditButton from "@Components/Buttons/EditButton";

const NotesListHeader = () => {
  return (
    <li className="note">
      <FiChevronDown style={{ visibility: "hidden" }} />
      <b>name</b>
      <div />
      <b>creation</b>
      <b>modification</b>
      <EditButton style={{ visibility: "hidden" }}>edit</EditButton>
    </li>
  );
};

const NotesList = ({ children }: any) => {
  return (
    <ul className="notes__list">
      <NotesListHeader />
      {children}
    </ul>
  );
};

export default NotesList;
