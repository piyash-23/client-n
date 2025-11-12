import React from "react";
import { createBrowserRouter } from "react-router";
import Paths from "../Paths/Paths";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Upevents from "../Pages/Upevents";

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
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
