import React from 'react'
import ReactDOM from 'react-dom/client'

// components/pages
import Root from './pages/Root';
// import Root from "@Pages/Root";

// utils
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// css
import './index.css'
import VisitPlanner from './pages/DoctorOffice/VisitPlanner';

// routing in application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/appointement-planner",
        element: <VisitPlanner />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
