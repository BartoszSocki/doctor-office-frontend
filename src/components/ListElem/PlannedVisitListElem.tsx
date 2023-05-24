import GreenButton from "@Components/Buttons/CreateButton";
import RemoveButton from "@Components/Buttons/RemoveButton";
import ListElem from "@Components/ListElem/ListElem";

const PlannedVisitListElem = (props: any) => {
  const { id, day, begTime, endTime, street, user, cancelled, role } =
    props.plannedVisit;
  const { onRemove, onCreate } = props;

  const begTimeFormated: string = begTime.substring(0, begTime.length - 3);
  const endTimeFormated: string = endTime.substring(0, endTime.length - 3);
  const date = new Date(Date.parse(day)).toLocaleDateString();

  const duration = `${begTimeFormated}-${endTimeFormated}`;
  const cancelledMessage = (cancelled as boolean) ? "cancelled" : "active";

  return (
    <ListElem>
      <div className="planned-visit-date">{date}</div>
      <em className="planned-visit-duration">{duration}</em>
      <div className="planned-visit-street">{street}</div>
      <div className="planned-visit-user">{user}</div>
      <div className="planned-visit-status">{cancelledMessage}</div>
      <div className="list-elem-space" />
      <nav className="list-elem-actions">
        {role === "DOCTOR" ? (
          <GreenButton onClick={() => onCreate(id)}>new note</GreenButton>
        ) : null}
        <RemoveButton onClick={() => onRemove()}>cancel</RemoveButton>
      </nav>
    </ListElem>
  );
};

export default PlannedVisitListElem;
