import React from "react";
import ReactDOM from "react-dom/client";

// utils
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Login from "@Pages/Login/Login";
import Dashboard from "@Pages/Dashboard/Dashboard";
import PlannedVisits from "@Pages/PlannedVisits/PlannedVisits";
import Notes from "@Pages/Notes/Notes";
import NoteCreate from "@Pages/Notes/NoteCreate";
import DoctorsList from "@Pages/Doctors/DoctorsList";
import ClientRegistrationForm from "@Pages/Register/ClientRegistrationForm";
import DoctorRegistrationForm from "@Pages/Register/DoctorRegistrationForm";
import VisitScheduler from "@Pages/VisitScheduler/VisitScheduler";
import DayVisitSchedulerForm from "@Pages/VisitScheduler/DayVisitSchedulerForm";
import { ClientAPI, DoctorAPI } from "@Utils/ApiUtils";
import NoteEdit from "@Pages/Notes/NoteEdit";
import Clients from "@Pages/Clients/Clients";
import ErrorHandler from "@Components/Error/ErrorHandler";
import LoginGuard from "@Components/LoginGuard/LoginGuard";

// routing in application
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register/client",
    element: <ClientRegistrationForm />,
  },
  {
    path: "/register/doctor",
    element: <DoctorRegistrationForm />,
  },
  {
    path: "/dashboard",
    element: (
      <LoginGuard>
        <Dashboard />
      </LoginGuard>
    ),
    errorElement: <ErrorHandler />,
    children: [
      {
        path: "/dashboard/client/planned-visits",
        element: <PlannedVisits />,
        loader: async () => await ClientAPI.get("/planned-visits"),
      },
      {
        path: "/dashboard/doctor/scheduled-visits",
        element: <VisitScheduler />,
        loader: async () => await DoctorAPI.get("/scheduled-visits"),
      },
      {
        path: "/dashboard/doctor/scheduled-visits/:day/new",
        element: <DayVisitSchedulerForm />,
      },
      {
        path: "/dashboard/doctor/planned-visits",
        element: <PlannedVisits />,
        loader: async () => await DoctorAPI.get("/planned-visits"),
      },
      {
        path: "/dashboard/doctor/planned-visits/:id",
        element: <PlannedVisits />,
        loader: async ({ params }) =>
          await ClientAPI.get(`/${params.id as string}/planned-visits`),
      },
      {
        path: "/dashboard/notes",
        element: <Notes />,
        loader: async () => await DoctorAPI.get("/notes"),
      },
      {
        path: "/dashboard/notes/:id",
        element: <Notes />,
        loader: async ({ params }) =>
          await DoctorAPI.get(`/notes/${params.id as string}`),
      },
      {
        path: "/dashboard/notes/:id/edit",
        element: <NoteEdit />,
        loader: async ({ params }) =>
          await DoctorAPI.get(`/notes/${params.id as string}`),
      },
      {
        path: "/dashboard/notes/new/:id",
        element: <NoteCreate />,
      },
      {
        path: "/dashboard/clients",
        element: <Clients />,
        loader: async () => await DoctorAPI.get("/clients"),
      },
      {
        path: "/dashboard/doctors",
        element: <DoctorsList />,
        loader: async ({ request }) => {
          const options = request.url.split("?").at(1) ?? "";
          return await ClientAPI.get(`/doctors?${options}`);
        },
      },
    ],
  },
  {
    path: "/*",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
