import DayVisitPlanner from "./DayVisitPlanner";
import PlannedVisit from "./PlannedVisit";
import './style.css';

const WeekVisitPlanner = () => {
  return (
    <div className="week-visit-planner-wrapper">
      <DayVisitPlanner name="Monday">
        <PlannedVisit begTime="15:00" endTime="16:00" localization="Warsaassasassasasasw" typeOfVisit="some type of visit" />
        <PlannedVisit begTime="16:00" endTime="17:00" localization="Warsaw" typeOfVisit="some type of visit" />
        <PlannedVisit begTime="17:00" endTime="18:00" localization="Warsaw" typeOfVisit="some type of visit" />
      </DayVisitPlanner>

      <DayVisitPlanner name="Tuesday">
        <PlannedVisit begTime="15:00" endTime="16:00" localization="Warsaw" typeOfVisit="some type of visit" />
        <PlannedVisit begTime="16:00" endTime="17:00" localization="Warsaw" typeOfVisit="some type of visit" />
      </DayVisitPlanner>

      <DayVisitPlanner name="Weednesday">
        <PlannedVisit begTime="15:00" endTime="16:00" localization="Warsaw" typeOfVisit="some type of visit" />
      </DayVisitPlanner>
    </div>
  );
}

export default WeekVisitPlanner;