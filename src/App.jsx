import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./Components/Pages/AdminDepartment/AdminDashboard";
import Registration from "./Components/Authentication/Registration";
import Home from "./Components/Home";
import AdminLogin from "./Components/Authentication/AdminLogin";
import AccountsLogin from "./Components/Authentication/AccountsLogin";
import ExportLogin from "./Components/Authentication/ExportLogin";
import HRLogin from "./Components/Authentication/HRLogin";
import ImportLogin from "./Components/Authentication/ImportLogin";
import PurchaseLogin from "./Components/Authentication/PurchaseLogin";
import SalesLogin from "./Components/Authentication/SalesLogin";
import StockLogin from "./Components/Authentication/StockLogin";

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
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
