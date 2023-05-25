import "./style.css";

import CreateButton from "@Components/Buttons/CreateButton";
import RemoveButton from "@Components/Buttons/RemoveButton";

const PlannedVisit = (props: any) => {
  const { id, day, begTime, endTime, street, user, cancelled, role } =
    props.plannedVisit;
  const { onRemove, onCreate } = props;

  const begTimeFormated: string = begTime.substring(0, begTime.length - 3);
  const endTimeFormated: string = endTime.substring(0, endTime.length - 3);
  const date = new Date(Date.parse(day)).toLocaleDateString();

  const duration = `${begTimeFormated}-${endTimeFormated}`;
  const cancelledMessage = (cancelled as boolean) ? "cancelled" : "active";

  return (
    <li className="planned-visit">
      <div>{date}</div>
      <em>{duration}</em>
      <div>{street}</div>
      <div>{user}</div>
      <div>{cancelledMessage}</div>
      <div />
      <CreateButton
        style={{ visibility: role !== "DOCTOR" ? "hidden" : "visible" }}
        onClick={() => onCreate(id)}
      >
        new note
      </CreateButton>
      <RemoveButton onClick={() => onRemove()}>cancel</RemoveButton>
    </li>
  );
};

export default PlannedVisit;
