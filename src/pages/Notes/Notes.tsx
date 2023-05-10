import NoteListElem from "@Components/ListElem/NoteListElem";
import useNotes from "@Hooks/useNotes";

const Notes = () => {
  const { notes } = useNotes();
  console.log(notes);

  return (
    <div>
      {notes.map((n) => {
        return <NoteListElem {...n} key={n.id} />;
      })}
    </div>
  );
};

export default Notes;
