import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./components/Chat";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Chat",
        element: <Chat />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
