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
import axios from "axios";
import { getToken } from "@Utils/TokenUtils";
import NoteCreate from "@Pages/Notes/NoteCreate";

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
        path: "/dashboard/planned-visits",
        element: <PlannedVisits />,
      },
      {
        path: "/dashboard/notes",
        element: <Notes />,
      },
      {
        path: "/dashboard/notes/:id",
        element: <NoteEdit />,
        loader: async ({ params }) => {
          return await axios.get(
            `${import.meta.env.VITE_API_URL}/api/doctor/notes/${
              params.id as string
            }`,
            {
              headers: { Authorization: `Bearer ${getToken()}` },
            }
          );
        },
      },
      {
        path: "/dashboard/notes/new/:id",
        element: <NoteCreate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
