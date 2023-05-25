import "./style.css";

import { useLoaderData, useNavigate } from "react-router-dom";

import NavigationFooter from "@Components/Pageable/NavigaionFooter";
import Doctor from "@Pages/Doctors/Doctor";
import DoctorsList from "@Pages/Doctors/DoctorsList";

import type DoctorSearchData from "@Interfaces/DoctorSearchData";
const Doctors = () => {
  const res = useLoaderData() as any;
  const navigate = useNavigate();

  const { doctors } = res.data._embedded;
  const links = res.data._links;

  return (
    <>
      <h1 className="doctors__header">Doctors</h1>
      <DoctorsList>
        {doctors.map((d: DoctorSearchData) => {
          const onVisits = () => {
            navigate(`/dashboard/doctor/${d.id}/visits`);
          };

          return <Doctor doctor={d} onVisits={onVisits} key={d.id} />;
        })}
      </DoctorsList>

      <div style={{ flexGrow: "1" }} />

      <NavigationFooter {...links} url="/dashboard/doctors" />
    </>
  );
};

export default Doctors;
