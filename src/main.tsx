import React from "react";
import ReactDOM from "react-dom/client";

// utils
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./index.css";
import Login from "@Pages/Login/Login";
import Dashboard from "@Pages/Dashboard/Dashboard";
import PlannedVisits from "@Pages/PlannedVisits/PlannedVisits";
import Notes from "@Pages/Notes/Notes";
import NoteEdit from "@Pages/Notes/NoteEdit";
import NoteCreate from "@Pages/Notes/NoteCreate";
import { getRequest } from "@Utils/FetchUtils";
import ClientsList from "@Pages/Clients/ClientsList";
import DoctorsList from "@Pages/Doctors/DoctorsList";
import ClientRegistrationForm from "@Pages/Register/ClientRegistrationForm";
import DoctorRegistrationForm from "@Pages/Register/DoctorRegistrationForm";
import VisitScheduler from "@Pages/VisitScheduler/VisitScheduler";
import DayVisitSchedulerForm from "@Pages/VisitScheduler/DayVisitSchedulerForm";
import { getAllNotes, getDoctorNotesAboutClientWithId } from "@Utils/ApiUtils";

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
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/client/planned-visits",
        element: <PlannedVisits />,
        loader: async () => {
          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/client/planned-visits`
          );
        },
      },
      {
        path: "/dashboard/doctor/scheduled-visits",
        element: <VisitScheduler />,
        loader: async () => {
          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/doctor/scheduled-visits`
          );
        },
      },
      {
        path: "/dashboard/doctor/scheduled-visits/:day/new",
        element: <DayVisitSchedulerForm />,
      },
      {
        path: "/dashboard/doctor/planned-visits",
        element: <PlannedVisits />,
        loader: async () => {
          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/doctor/planned-visits`
          );
        },
      },
      {
        path: "/dashboard/doctor/planned-visits/:id",
        element: <PlannedVisits />,
        loader: async ({ params }) => {
          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/client/${
              params.id as string
            }/planned-visits`
          );
        },
      },
      {
        path: "/dashboard/notes",
        element: <Notes />,
        loader: async () => {
          return await getAllNotes();
        },
      },
      {
        path: "/dashboard/notes/:id",
        element: <Notes />,
        loader: async ({ params }) => {
          return await getDoctorNotesAboutClientWithId(params.id as string);
        },
      },
      {
        path: "/dashboard/notes/:id",
        element: <NoteEdit />,
        loader: async ({ params }) => {
          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/doctor/notes/${
              params.id as string
            }`
          );
        },
      },
      {
        path: "/dashboard/notes/new/:id",
        element: <NoteCreate />,
      },
      {
        path: "/dashboard/clients",
        element: <ClientsList />,
        loader: async ({ request }) => {
          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/doctor/clients`
          );
        },
      },
      {
        path: "/dashboard/doctors",
        element: <DoctorsList />,
        loader: async ({ request }) => {
          const options = request.url.split("?").at(1) ?? "";

          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/doctors?${options}`
          );
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
