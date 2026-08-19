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
import Users from "./Components/Pages/AdminDepartment/Users";
import Departments from "./Components/Pages/AdminDepartment/Departments";
import Employees from "./Components/Pages/AdminDepartment/Employees";
import AccountsDashboard from "./Components/Pages/AccountsDeoartment/AccountsDashboard";
import CreateInvoice from "./Components/Pages/AccountsDeoartment/CreateInvoice";
import InvoicePreview from "./Components/Pages/AccountsDeoartment/InvoicePreview";
import ViewAllGeneratedInvoices from "./Components/Pages/AccountsDeoartment/ViewAllGeneratedInvoices";

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
  {
    path: "/admin-users",
    element: <Users />,
  },
  {
    path: "/admin-departments",
    element: <Departments />,
  },
  {
    path: "/admin-employees",
    element: <Employees />,
  },
  {
    path: "/accounts-dashboard",
    element: <AccountsDashboard />,
  },
  {
    path: "/accounts-create-invoice",
    element: <CreateInvoice />,
  },
  {
    path: "/accounts/invoice-preview",
    element: <InvoicePreview />,
  },
  {
    path: "/accounts/all-generated-bills",
    element: <ViewAllGeneratedInvoices />,
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
