import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Common/Home";
import Registration from "./Authentication/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
