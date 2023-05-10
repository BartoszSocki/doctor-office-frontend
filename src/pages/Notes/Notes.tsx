import NoteListElem from "@Components/ListElem/NoteListElem";
import useNotes from "@Hooks/useNotes";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const { notes } = useNotes();
  const navigate = useNavigate();

  return (
    <div>
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
