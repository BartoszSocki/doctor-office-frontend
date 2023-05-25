import type DoctorScheduledVisitData from "@Interfaces/DoctorScheduledVisitData";
import "./style.css";

import RemoveButton from "@Components/Buttons/RemoveButton";

const getTime = (timeString: string) => {
  const timeParts = timeString.split(":");
  return `${timeParts[0]}:${timeParts[1]}`;
};

const ScheduledVisit = (props: DoctorScheduledVisitData & any) => {
  const { visitBegTime, visitEndTime, price, type, address } =
    props.scheduledVisit;

  const { onRemove } = props;
  const time = `${getTime(visitBegTime)}-${getTime(visitEndTime)}`;

  return (
    <li className="scheduled-visit">
      <em>{time}</em>
      <div>{type}</div>
      <div>{address.street}</div>
      <div>{price} PLN</div>
      <div />
      <RemoveButton onClick={onRemove}>remove</RemoveButton>
    </li>
  );
};

export default ScheduledVisit;
