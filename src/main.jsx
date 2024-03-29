import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListaInvitados from "./components/ListaInvitados.jsx";
import Invitado from "./sections/Invitado.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/invitado/:id",
        element: <Invitado />,
      },
    ],
  },
  {
    path: "/lista-invitados",
    element: <ListaInvitados />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
