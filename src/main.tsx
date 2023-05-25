import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorHandler from "@Components/Error/ErrorHandler";
import LoginSwitch from "@Components/LoginGuard/LoginSwitch";
import Clients from "@Pages/Clients/Clients";
import Dashboard from "@Pages/Dashboard/Dashboard";
import Doctors from "@Pages/Doctors/Doctors";
import LandingPage from "@Pages/LandingPage/LandingPage";
import Login from "@Pages/Login/Login";
import NoteCreate from "@Pages/Notes/NoteCreate";
import NoteEdit from "@Pages/Notes/NoteEdit";
import Notes from "@Pages/Notes/Notes";
import PlannedVisits from "@Pages/PlannedVisits/PlannedVisits";
import ClientRegistrationForm from "@Pages/Register/ClientRegistrationForm";
import DoctorRegistrationForm from "@Pages/Register/DoctorRegistrationForm";
import DayVisitSchedulerForm from "@Pages/VisitScheduler/DayVisitSchedulerForm";
import VisitScheduler from "@Pages/VisitScheduler/VisitScheduler";
import { ClientAPI, DoctorAPI } from "@Utils/ApiUtils";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginSwitch ok={<Navigate to="/dashboard" />} bad={<Login />} />,
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
    element: <LoginSwitch ok={<Dashboard />} bad={<Navigate to="/login" />} />,
    errorElement: <ErrorHandler />,
    children: [
      {
        path: "/dashboard",
        element: <LandingPage />,
      },
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
        element: <Doctors />,
        loader: async ({ request }) => {
          const options = request.url.split("?").at(1) ?? "";
          return await ClientAPI.get(`/doctors?${options}`);
        },
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
