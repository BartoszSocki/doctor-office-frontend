import type DoctorScheduledVisitData from "@Interfaces/DoctorScheduledVisitData";
import "./style.css";
import ListElem from "./ListElem";
import RemoveButton from "@Components/Buttons/RemoveButton";

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
    <ListElem>
      <div className="scheduled-visit-end-time">{time}</div>
      <div className="scheduled-visit-type">{type}</div>
      <div className="scheduled-visit-address">{address.street}</div>
      <div className="scheduled-visit-price">{price} PLN</div>
      <div className="list-elem-space" />
      <nav className="list-elem-actions">
        <RemoveButton onClick={onRemove}>remove</RemoveButton>
      </nav>
    </ListElem>
  );
};

export default ScheduledVisitListElem;
