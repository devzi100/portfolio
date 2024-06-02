import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
