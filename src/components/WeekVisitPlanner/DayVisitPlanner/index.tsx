import { useEffect, useState } from 'react';

import './style.css';

type DayVisitPlannerPropsType = {
  name: String;
  children: any; // TODO
}

const DayVisitPlanner = ({name, children}: DayVisitPlannerPropsType) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    let date = new Date().toISOString().split('T')[0];
    setDate(date);
  });

  return (
    <div className="day-visit-planner-wrapper">
      <div className="day-visit-planner-actions">
        <div className="day-visit-planner-day-info">
          <h3 className="day-visit-planner-name-of-the-week">{name}</h3>
          <h4 className="day-visit-planner-date">{date}</h4>
        </div>
        <button className="day-visit-planner-btn-add">add</button>
        <div className="day-visit-planner-space" />
        <button className="day-visit-planner-btn-collapse">collapse</button>
      </div>

      <div className="day-visit-planner-visits">
        {children}
      </div>
    </div>
  );
}

export default DayVisitPlanner