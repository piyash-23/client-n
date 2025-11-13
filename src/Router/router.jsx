import React from "react";
import { createBrowserRouter } from "react-router";
import Paths from "../Paths/Paths";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Upevents from "../Pages/Upevents";
import Details from "../Pages/Details";
import PrivateRoute from "./Private/PrivateRoute";
import CreateEvent from "../Pages/CreateEvent";
import Manage from "../Pages/Manage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Paths,
    errorElement: <div>page not found</div>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "upcoming",
        loader: () => fetch("http://localhost:3000/events"),
        Component: Upevents,
      },
      {
        path: "upcoming/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "new-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "manage-events",
        element: (
          <PrivateRoute>
            <Manage></Manage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
