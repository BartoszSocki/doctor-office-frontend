import "./style.css";

import EditButton from "@Components/Buttons/EditButton";

const DoctorsListHeader = () => {
  return (
    <li className="doctor">
      <b>Name</b>
      <b>Surname</b>
      <b>Specialization</b>
      <div />
      <EditButton style={{ visibility: "hidden" }} onClick={() => {}}>
        visits
      </EditButton>
    </li>
  );
};

const DoctorsList = ({ children }: any) => {
  return (
    <ul className="doctors__list">
      <DoctorsListHeader />
      {children}
    </ul>
  );
};

export default DoctorsList;
