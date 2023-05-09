import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp, FiPlus } from "react-icons/fi";
import "./style.css";

interface DayVisitPlannerPropsType {
  name: string;
  children: any; // TODO
}

// TODO
const DayVisitPlanner = ({ name, children }: DayVisitPlannerPropsType) => {
  const [date, setDate] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const date = new Date().toISOString().split("T")[0];
    setDate(date);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="day-visit-planner-wrapper">
      <div className="day-visit-planner-actions">
        <div className="day-visit-planner-day-info">
          <h3 className="day-visit-planner-name-of-the-week">{name}</h3>
          {/* <h4 className="day-visit-planner-date">{date}</h4> */}
        </div>
        <button className="day-visit-planner-btn-add">
          add <FiPlus />
        </button>
        <div className="day-visit-planner-space" />
        <button
          className="day-visit-planner-btn-collapse"
          onClick={toggleCollapse}
        >
          collapse
          {isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {isCollapsed ? (
        <div>...</div>
      ) : (
        <div className="day-visit-planner-visits">{children}</div>
      )}
    </div>
  );
};

export default DayVisitPlanner;
