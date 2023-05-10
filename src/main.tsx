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
        element: <PlannedVisits />,
        loader: async () => {
          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/client/planned-visits`
          );
        },
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
          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/doctor/notes`
          );
        },
      },
      {
        path: "/dashboard/notes/:id",
        element: <Notes />,
        loader: async ({ params }) => {
          return await getRequest(
            `${import.meta.env.VITE_API_URL}/api/doctor/notes/client/${
              params.id as string
            }`
          );
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
