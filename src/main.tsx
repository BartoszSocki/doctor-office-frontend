import React from 'react'
import ReactDOM from 'react-dom/client'

// components/pages
import Root from "@Pages/Root";
import VisitPlanner from '@Pages/DoctorOffice/VisitPlanner';
import VisitModal from '@Components/Modals/VisitModal';

// utils
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// css
import './index.css'

// routing in application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/appointement-planner",
        element: <VisitPlanner /> 
      },
      {
        path: "/modal-test",
        element: <VisitModal />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
