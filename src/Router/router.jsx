import React from "react";
import { createBrowserRouter } from "react-router";
import Paths from "../Paths/Paths";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
