import WeekVisitPlanner from '@Components/WeekVisitPlanner'
import './style.css'

const VisitPlanner = () => {
  return (
    <div className="planner-wrapper">
      <h1 className="planner-header">Schedule Creator</h1>
      <div className="planner-body">
        <WeekVisitPlanner />
      </div>
    </div>
  )
}

export default VisitPlanner
