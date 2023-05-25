import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import DayVisitScheduler from "./DayVisitScheduler";

import "./style.css";

// const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const VisitScheduler = () => {
  const res = useLoaderData() as any;
  const [scheduledVisits, setScheduledVisits] = useState(
    res.data._embedded?.scheduledVisits ?? []
  );

  return (
    <>
      <h1 className="scheduler-header">Visits Scheduler</h1>
      <div className="visit-scheduler-wrapper">
        {days.map((day) => {
          return (
            <div className="day-visit-scheduler-wrapper" key={day}>
              <DayVisitScheduler
                day={day}
                scheduledVisits={scheduledVisits}
                setScheduledVisits={setScheduledVisits}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VisitScheduler;
