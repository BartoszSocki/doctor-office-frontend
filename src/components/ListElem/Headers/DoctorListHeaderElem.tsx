import ListElem from "../ListElem";
import "../style.css";

const DoctorListHeaderElem = () => {
  return (
    <ListElem>
      <div className="doctor-name">
        <b>Name</b>
      </div>
      <div className="doctor-surname">
        <b>Surname</b>
      </div>
      <div className="doctor-specialization">
        <b>Specialization</b>
      </div>
      <div className="list-elem-space" />
    </ListElem>
  );
};

export default DoctorListHeaderElem;
