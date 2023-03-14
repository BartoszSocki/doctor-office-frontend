import './style.css';

type PlannedVisitPropsType = {
  begTime: String;
  endTime: String;
  localization: String;
  typeOfVisit: String;
};

const PlannedVisit = ({begTime, endTime, localization, typeOfVisit}: PlannedVisitPropsType) => {
  return (
    <div className="visit-wrapper">
      <em className="visit-time">{begTime}-{endTime}</em>
      <div className="visit-localization">{localization}</div>
      <div className="visit-type">{typeOfVisit}</div>
      <div className="visit-space" />
      <div className="visit-actions">
        <button className="visit-btn-edit">edit</button>
        <button className="visit-btn-remove">remove</button>
      </div>
    </div>
  )
}

export default PlannedVisit;