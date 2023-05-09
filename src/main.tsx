import React from "react";
import ReactDOM from "react-dom/client";

// components/pages
import VisitPlanner from "@Pages/DoctorOffice/VisitPlanner";
import VisitModal from "@Components/Modals/VisitModal";

// utils
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./index.css";
import Login from "@Pages/Login";
import Dashboard from "@Pages/Dashboard";
import ClientVisits from "@Pages/ClientVisits";

// routing in application
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/client/planned-visits",
        element: <ClientVisits />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
