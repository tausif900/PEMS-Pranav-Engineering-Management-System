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
import DomesticBills from "./Components/Pages/AccountsDeoartment/DomesticBills";
import InternationalBills from "./Components/Pages/AccountsDeoartment/InternationalBills";
import AddDepartment from "./Components/Pages/AdminDepartment/AddDepartment";
import StockDashboard from "./Components/Pages/StockDepartment/StockDashboard";
import AddProduct from "./Components/Pages/StockDepartment/AddProduct";
import ViewAllProducts from "./Components/Pages/StockDepartment/ViewAllProducts";
import StockOverview from "./Components/Pages/StockDepartment/StockOverview";
import PurchaseDashboard from "./Components/Pages/PurchaseDepartment/PurchaseDashboard";
import ViewAllPurchaseRequest from "./Components/Pages/PurchaseDepartment/ViewAllPurchaseRequest";
import ViewAllSuppliers from "./Components/Pages/PurchaseDepartment/ViewAllSuppliers";
import AddSupplier from "./Components/Pages/PurchaseDepartment/AddSupplier";
import CreatePO from "./Components/Pages/PurchaseDepartment/CreatePO";
import POPreview from "./Components/Pages/PurchaseDepartment/POPreview";
import ViewOpenPO from "./Components/Pages/PurchaseDepartment/ViewOpenPO";
import ReceiveMaterialForm from "./Components/Pages/PurchaseDepartment/ReceiveMaterialForm";

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
    path: "/admin/add-department",
    element: <AddDepartment />,
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
    path: "/accounts/all-domestic-bills",
    element: <DomesticBills />,
  },
  {
    path: "/accounts/all-international-bills",
    element: <InternationalBills />,
  },
  {
    path: "/stock-dashboard",
    element: <StockDashboard />,
  },
  {
    path: "/stock/add-product",
    element: <AddProduct />,
  },
  {
    path: "/stock/view-all-products",
    element: <ViewAllProducts />,
  },
  {
    path: "/stock/stock-overview",
    element: <StockOverview />,
  },
  {
    path: "/purchase-dashboard",
    element: <PurchaseDashboard />,
  },
  {
    path: "/purchase/purchase-requests",
    element: <ViewAllPurchaseRequest />,
  },
  {
    path: "/purchase/suppliers",
    element: <ViewAllSuppliers />,
  },
  {
    path: "/purchase/add-supplier",
    element: <AddSupplier />,
  },
  {
    path: "/purchase/create-PO",
    element: <CreatePO />,
  },
  {
    path: "/purchase-preview",
    element: <POPreview />,
  },
  {
    path: "/open-PO",
    element: <ViewOpenPO />,
  },
  {
    path: "/fill-receive-material-form",
    element: <ReceiveMaterialForm/>
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
