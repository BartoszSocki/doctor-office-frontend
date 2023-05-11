import EditButton from "@Components/Buttons/EditButton";
import ListElem from "@Components/ListElem/ListElem";
import "./style.css";

const DoctorListElem = (props: any) => {
  const { name, surname, specialization } = props.doctor;
  const { onVisits } = props;

  return (
    <ListElem>
      <div className="doctor-name">{name}</div>
      <div className="doctor-surname">{surname}</div>
      <div className="doctor-specialization">{specialization}</div>
      <div className="list-elem-space" />
      <nav className="list-elem-actions">
        <EditButton onClick={onVisits}>visits</EditButton>
      </nav>
    </ListElem>
  );
};

export default DoctorListElem;
