import EditButton from "@Components/Buttons/EditButton";
import ScheduledVisitListElem from "@Components/ListElem/ScheduledVisitListElem";
import type DoctorScheduledVisitData from "@Interfaces/DoctorScheduledVisitData";
import { deleteRequest } from "@Utils/FetchUtils";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import "./style.css";

const DayVisitScheduler = (props: any) => {
  const { day, scheduledVisits, setScheduledVisits } = props;
  const [isCollapsed, setIsColapsed] = useState(false);

  return (
    <>
      <nav className="day-visit-scheduler-nav">
        <div
          className="day-visit-scheduler-collapse"
          onClick={() => setIsColapsed((c) => !c)}
        >
          {isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <p>{day}</p>
        <div className="day-visit-scheduler-space" />
        <EditButton onEdit={() => {}}>add</EditButton>
      </nav>
      <>
        {isCollapsed
          ? "..."
          : scheduledVisits
              .filter((v: DoctorScheduledVisitData) => v.dayOfTheWeek === day)
              .map((v: DoctorScheduledVisitData) => {
                const onRemove = async () => {
                  setScheduledVisits(
                    scheduledVisits.filter(
                      (sv: DoctorScheduledVisitData) => sv.id !== v.id
                    )
                  );
                  await deleteRequest(v._links.remove.href);
                };

                return (
                  <ScheduledVisitListElem
                    scheduledVisit={v}
                    key={v.id}
                    onRemove={onRemove}
                  />
                );
              })}
      </>
    </>
  );
};

export default DayVisitScheduler;
