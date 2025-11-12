import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Router/router.jsx";
import Authprovider from "./Context/Authprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </StrictMode>
);
