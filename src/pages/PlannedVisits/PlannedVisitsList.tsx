import "./style.css";

const PlannedVisitsListHeader = (props: any) => {
  const { role } = props;
  return (
    <li className="planned-visit">
      <b>Date</b>
      <b>Duration</b>
      <b>Street</b>
      <b>{role === "CLIENT" ? "Doctor" : "Client"}</b>
      <b>Status</b>
    </li>
  );
};

const PlannedVisitsList = ({ children, role }: any) => {
  return (
    <ul className="planned-visits__list">
      <PlannedVisitsListHeader role={role} />
      {children}
    </ul>
  );
};

export default PlannedVisitsList;
