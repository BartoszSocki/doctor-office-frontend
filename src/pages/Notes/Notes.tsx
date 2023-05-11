import NoteListElem from "@Components/ListElem/NoteListElem";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./style.css";
import NoteListHeaderElem from "@Components/ListElem/Headers/NoteListHeaderElem";

const Notes = () => {
  const navigate = useNavigate();

  const res = useLoaderData() as any;
  const notes = res.data._embedded.notes;

  return (
    <div>
      <h1 className="notes-header">Notes</h1>
      <NoteListHeaderElem />
      {notes.map((n) => {
        const handleEdit = () => {
          navigate(`/dashboard/notes/${n.id}`);
        };
        return <NoteListElem {...n} key={n.id} onEdit={handleEdit} />;
      })}
    </div>
  );
};

export default Notes;
