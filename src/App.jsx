import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Common/Home";
import Registration from "./Authentication/Registration";
import AdminLogin from "./Authentication/AdminLogin";
import AccountsLogin from "./Authentication/AccountsLogin";
import ExportLogin from "./Authentication/ExportLogin";
import HRLogin from "./Authentication/HRLogin";
import ImportLogin from "./Authentication/ImportLogin";
import PurchaseLogin from "./Authentication/PurchaseLogin";
import SalesLogin from "./Authentication/SalesLogin";
import StockLogin from "./Authentication/StockLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/Admin-Login",
    element: <AdminLogin />,
  },
  {
    path: "/Accounts-Login",
    element: <AccountsLogin />,
  },
  {
    path: "/Export-Login",
    element: <ExportLogin />,
  },
  {
    path: "/HR-Login",
    element: <HRLogin />,
  },
  {
    path: "/Import-Login",
    element: <ImportLogin />,
  },
  {
    path: "/Purchase-Login",
    element: <PurchaseLogin />,
  },
  {
    path: "/Sales-Login",
    element: <SalesLogin />,
  },
  {
    path: "/Stock-Login",
    element: <StockLogin />,
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
