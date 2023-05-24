import DoctorListElem from "@Components/ListElem/DoctorListElem";
import DoctorListHeaderElem from "@Components/ListElem/Headers/DoctorListHeaderElem";
import type DoctorSearchData from "@Interfaces/DoctorSearchData";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

import "./style.css";

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

      <div className="pageable-actions">
        {"first" in links ? (
          <Link
            to={`/dashboard/doctors?${
              links.first.href.split("?").at(1) as string
            }`}
          >
            {"<<"} first
          </Link>
        ) : null}
        {"prev" in links ? (
          <Link
            to={`/dashboard/doctors?${
              links.prev.href.split("?").at(1) as string
            }`}
          >
            {"<"} prev
          </Link>
        ) : null}
        {"next" in links ? (
          <Link
            to={`/dashboard/doctors?${
              links.next.href.split("?").at(1) as string
            }`}
          >
            next {">"}
          </Link>
        ) : null}
        {"last" in links ? (
          <Link
            to={`/dashboard/doctors?${
              links.last.href.split("?").at(1) as string
            }`}
          >
            last {">>"}
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default DoctorsList;
