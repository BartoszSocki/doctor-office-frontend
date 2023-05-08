import React from "react";
import ReactDOM from "react-dom/client";

// components/pages
import Root from "@Pages/Root";
import VisitPlanner from "@Pages/DoctorOffice/VisitPlanner";
import VisitModal from "@Components/Modals/VisitModal";

// utils
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./index.css";
import Login from "@Pages/Auth/Login";
import Dashboard from "@Pages/Dashboard";

// routing in application
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
