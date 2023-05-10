import ListElem from "./ListElem";
import "./style.css";

const PlannedVisitsListHeaderElem = (props: any) => {
  const { role } = props;
  return (
    <ListElem>
      <div className="planned-visit-date">
        <b>Date</b>
      </div>
      <div className="planned-visit-duration">
        <b>Duration</b>
      </div>
      <div className="planned-visit-street">
        <b>Street</b>
      </div>
      <div className="planned-visit-user">
        <b>{role === "CLIENT" ? "Doctor" : "Client"}</b>
      </div>
      <div className="planned-visit-status">
        <b>Status</b>
      </div>
    </ListElem>
  );
};

export default PlannedVisitsListHeaderElem;
