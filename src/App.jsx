import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RegisterStatus from "./pages/RegisterStatus";
import VendorSignUp from "./pages/VendorSignUp";
import VendorLogin from "./pages/VendorLogin";
import DashboardLayout from "./layouts/DashboardLayout";
import GetAll from "./pages/dashboard/components/GetAll";
import AddForm from "./pages/dashboard/components/AddForm";
import UpdateAdvert from "./pages/dashboard/components/UpdateAdvert";
import Prices from "./pages/dashboard/components/Prices";
import About from "./components/About";
import Resources from "./components/Resources";
import Settings from "./pages/dashboard/components/Settings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/resources",
      element: <Resources />
    },
    {
      path: "/registerstatus",
      element: <RegisterStatus />,
    },
    {
      path: "/vendorsignup",
      element: <VendorSignUp />,
    },
    {
      path: "/vendorlogin",
      element: <VendorLogin />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <GetAll />,
        },
        {
          path: "addform",
          element: <AddForm />,
        },
        {
          path: "updateadvert",
          element: <UpdateAdvert />,
        },
        {
          path: "prices",
          element: <Prices />
        },
        {
          path: "settings",
          element: <Settings />
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
