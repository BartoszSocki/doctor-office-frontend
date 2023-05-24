import { useLoaderData, useNavigate } from "react-router-dom";
import NotesList from "@Pages/Notes/NotesList";
import Note from "@Pages/Notes/Note";

import "./style.css";

const Notes = () => {
  const navigate = useNavigate();

  const res = useLoaderData() as any;
  const notes = res.data._embedded?.notes ?? [];

  return (
    <div>
      <h1 className="notes__header">Notes</h1>
      <NotesList>
        {notes.map((n: NoteData) => {
          const handleEdit = () => {
            navigate(`/dashboard/notes/${n.id}/edit`);
          };
          return <Note {...n} key={n.id} onEdit={handleEdit} />;
        })}
      </NotesList>
    </div>
  );
};

export default Notes;
