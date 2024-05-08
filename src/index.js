import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Ingreso from "./components/LogIn/LogIn";
import Registro from "./components/SignUp/SignUp";
import Verify from "./components/Verify/Verify";
import {
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const router = createHashRouter([
  {
    path: "/",
    element: <Registro />
  },
  {
    path: "/login",
    element: <Ingreso />
  },
  {
    path: "/singup",
    element: <Registro />
  },
  {
    path: "/verify/:key",
    element: <Verify />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
