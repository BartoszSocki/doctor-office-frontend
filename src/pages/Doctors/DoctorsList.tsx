import DoctorListElem from "@Components/ListElem/DoctorListElem";
import DoctorListHeaderElem from "@Components/ListElem/Headers/DoctorListHeaderElem";
import type DoctorSearchData from "@Interfaces/DoctorSearchData";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

import "./style.css";
import NavigationFooter from "@Components/Pageable/NavigaionFooter";

const DoctorsList = () => {
  const res = useLoaderData() as any;
  const navigate = useNavigate();

  const { doctors } = res.data._embedded;
  const links = res.data._links;

  return (
    <>
      <div>
        <h1 className="clients-header">Doctors</h1>
        <DoctorListHeaderElem />
        {doctors.map((d: DoctorSearchData) => {
          const onVisits = () => {
            navigate(`/dashboard/doctor/${d.id}/visits`);
          };

          return <DoctorListElem doctor={d} onVisits={onVisits} key={d.id} />;
        })}
      </div>

      <div style={{ flexGrow: "1" }} />

      <NavigationFooter {...links} url="/dashboard/doctors" />
    </>
  );
};

export default DoctorsList;
