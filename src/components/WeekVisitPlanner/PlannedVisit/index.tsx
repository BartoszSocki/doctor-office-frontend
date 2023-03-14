import './style.css';

type PlannedVisitPropsType = {
  begTime: String;
  endTime: String;
  localization: String;
  typeOfVisit: String;
  onRemove: any;
};

const PlannedVisit = ({begTime, endTime, localization, typeOfVisit, onRemove}: PlannedVisitPropsType) => {
  return (
    <div className="visit-wrapper">
      <em className="visit-time">{begTime}-{endTime}</em>
      <div className="visit-localization">{localization}</div>
      <div className="visit-type">{typeOfVisit}</div>
      <div className="visit-space" />
      <div className="visit-actions">
        <button className="visit-btn-edit">edit</button>
        <button className="visit-btn-remove" onClick={onRemove}>remove</button>
      </div>
    </div>
  )
}

export default PlannedVisit;