import { useState } from "react";
import DayVisitPlanner from "../DayVisitScheduler/DayVisitScheduler";
import PlannedVisit from "../PlannedVisit/PlannedVisit";
import "./style.css";
import PlannedVisitListElem from "@Components/ListElem/PlannedVisitListElem";

const exampleJSON = {
  monday: [
    {
      id: "aaa1",
      begTime: "15:00",
      endTime: "16:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
    {
      id: "aaa11",
      begTime: "16:00",
      endTime: "17:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
    {
      id: "aaa111",
      begTime: "17:00",
      endTime: "18:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
  ],
  tuesday: [
    {
      id: "aaa222",
      begTime: "15:00",
      endTime: "16:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
    {
      id: "aaa333",
      begTime: "16:00",
      endTime: "17:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
    {
      id: "aaa444",
      begTime: "17:00",
      endTime: "18:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
  ],
  wednesday: [
    {
      id: "aaa4444",
      begTime: "15:00",
      endTime: "16:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
    {
      id: "aaa5555",
      begTime: "16:00",
      endTime: "17:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
    {
      id: "aaa6666",
      begTime: "17:00",
      endTime: "18:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
  ],
  thursday: [
    {
      id: "aaa4444",
      begTime: "15:00",
      endTime: "16:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
    {
      id: "aaa5555",
      begTime: "16:00",
      endTime: "17:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
    {
      id: "aaa6666",
      begTime: "17:00",
      endTime: "18:00",
      localization: "Warsaw",
      typeOfVisit: "some type of visit",
    },
  ],
};

const WeekVisitPlanner = () => {
  const [schedule, setSchedule] = useState(exampleJSON);

  const handleRemove = (day: string, id: string) => {
    return () => {
      setSchedule((prev) => {
        const copy = JSON.parse(JSON.stringify(prev));

        /* @ts-expect-error */
        const afterRemoval = prev[day].filter((visit) => visit.id !== id);
        copy[day] = afterRemoval;
        return copy;
      });
    };
  };

  return (
    <div className="week-visit-planner-wrapper">
      {Object.keys(schedule).map((day) => {
        return (
          <DayVisitPlanner key={day} name={day}>
            {/* @ts-expect-error */}
            {schedule[day].map((visit) => {
              return (
                <PlannedVisit
                  key={visit.id}
                  begTime={visit.begTime}
                  endTime={visit.endTime}
                  localization={visit.localization}
                  typeOfVisit={visit.typeOfVisit}
                  onRemove={handleRemove(day, visit.id)}
                />
              );
            })}
          </DayVisitPlanner>
        );
      })}
    </div>
  );
};

export default WeekVisitPlanner;
