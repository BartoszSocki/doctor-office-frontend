import type DoctorScheduledVisitData from "@Interfaces/DoctorScheduledVisitData";
import RemoveButton from "@Components/Buttons/RemoveButton";

import "./style.css";

const getTime = (timeString: string) => {
  const timeParts = timeString.split(":");
  return `${timeParts[0]}:${timeParts[1]}`;
};

const ScheduledVisitListElem = (props: DoctorScheduledVisitData & any) => {
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

export default ScheduledVisitListElem;

// <ListElem>
//   <em className="scheduled-visit-end-time">{time}</em>
//   <div className="scheduled-visit-type">{type}</div>
//   <div className="scheduled-visit-address">{address.street}</div>
//   <div className="scheduled-visit-price">{price} PLN</div>
//   <div className="list-elem-space" />
//   <nav className="list-elem-actions">
//     <RemoveButton onClick={onRemove}>remove</RemoveButton>
//   </nav>
// </ListElem>
