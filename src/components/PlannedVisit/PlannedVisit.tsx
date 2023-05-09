import type PlannedVisitProps from "@Interfaces/PlannedVisitProps";
import "./style.css";

const PlannedVisit = (props: any) => {
  const {
    day,
    begTime,
    endTime,
    street,
    doctorName,
    doctorSurname,
    cancelled,
  } = props.plannedVisit;
  const onRemove = props.onRemove;

  return (
    <div className="visit-wrapper">
      <div className="">{day}</div>
      <em className="">
        {begTime}-{endTime}
      </em>
      <div className="">{street}</div>
      <div className="">
        dr. {doctorName} {doctorSurname}
      </div>
      <div className="">{cancelled ? "cancelled" : "active"}</div>
      <div className="visit-space" />
      <div className="visit-actions">
        <button className="visit-btn-edit">edit</button>
        <button className="visit-btn-remove" onClick={() => onRemove()}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default PlannedVisit;
