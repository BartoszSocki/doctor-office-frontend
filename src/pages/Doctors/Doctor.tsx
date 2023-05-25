import EditButton from "@Components/Buttons/EditButton";
import type DoctorSearchData from "@Interfaces/DoctorSearchData";

import "./style.css";

interface IDoctor {
  doctor: DoctorSearchData;
  onVisits: () => void;
}

const Doctor = (props: IDoctor) => {
  const { name, surname, specialization } = props.doctor;
  const { onVisits } = props;

  return (
    <li className="doctor">
      <div>{name}</div>
      <div>{surname}</div>
      <div>{specialization}</div>
      <div />
      <EditButton onClick={onVisits}>visits</EditButton>
    </li>
  );
};

export default Doctor;
