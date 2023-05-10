import EditButton from "@Components/Buttons/EditButton";
import RemoveButton from "@Components/Buttons/RemoveButton";
import ListElem from "@Components/ListElem/ListElem";

const PlannedVisitListElem = (props: any) => {
  const { day, begTime, endTime, street, user, cancelled } = props.plannedVisit;
  const onRemove = props.onRemove;

  const begTimeFormated: string = begTime.substring(0, begTime.length - 3);
  const endTimeFormated: string = endTime.substring(0, endTime.length - 3);
  const date = new Date(Date.parse(day)).toLocaleDateString();

  const duration = `${begTimeFormated}-${endTimeFormated}`;
  const cancelledMessage = (cancelled as boolean) ? "cancelled" : "active";

  return (
    <ListElem>
      <div className="">{date}</div>
      <em className="">{duration}</em>
      <div className="">{street}</div>
      <div className="">{user}</div>
      <div className="">{cancelledMessage}</div>
      <div className="list-elem-space" />
      <nav className="list-elem-actions">
        <EditButton>edit</EditButton>
        <RemoveButton onClick={() => onRemove()}>cancel</RemoveButton>
      </nav>
    </ListElem>
  );
};

export default PlannedVisitListElem;
