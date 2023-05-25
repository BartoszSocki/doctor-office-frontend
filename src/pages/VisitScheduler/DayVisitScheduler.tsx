import EditButton from "@Components/Buttons/EditButton";
import ScheduledVisitListElem from "@Pages/VisitScheduler/ScheduledVisitListElem";
import type DoctorScheduledVisitData from "@Interfaces/DoctorScheduledVisitData";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import "./style.css";
import { useNavigate } from "react-router-dom";
import { DoctorAPI } from "@Utils/ApiUtils";

interface IDayVisitScheduler {
  day: string;
  scheduledVisits: [DoctorScheduledVisitData];
  setScheduledVisits: (visits: DoctorScheduledVisitData[]) => void;
}

const DayVisitScheduler = (props: IDayVisitScheduler) => {
  const { day, scheduledVisits, setScheduledVisits } = props;
  const [isCollapsed, setIsColapsed] = useState(false);
  const navigate = useNavigate();

  const dayCode = day.substring(0, 3).toUpperCase();

  const handleNewVisit = () => {
    navigate(`/dashboard/doctor/scheduled-visits/${dayCode}/new`);
  };

  return (
    <>
      <nav className="day-visit-scheduler__nav">
        <div
          className="day-visit-scheduler__collapse"
          onClick={() => setIsColapsed((c) => !c)}
        >
          {isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <h2>{day}</h2>
        <div className="day-visit-scheduler__space" />
        <EditButton onClick={() => handleNewVisit()}>add</EditButton>
      </nav>

      <ul className="day-visit-scheduler__visits">
        {isCollapsed
          ? null
          : scheduledVisits
              .filter((v) => v.dayOfTheWeek === dayCode)
              .map((v) => {
                const onRemove = async () => {
                  if (
                    confirm(
                      "Are you sure, you want to remove this visit from the schedule?"
                    )
                  ) {
                    setScheduledVisits(
                      scheduledVisits.filter(
                        (sv: DoctorScheduledVisitData) => sv.id !== v.id
                      )
                    );
                    await DoctorAPI.delete(v._links.remove.href);
                  }
                };

                return (
                  <ScheduledVisitListElem
                    scheduledVisit={v}
                    key={v.id}
                    onRemove={onRemove}
                  />
                );
              })}
      </ul>
    </>
  );
};

export default DayVisitScheduler;
