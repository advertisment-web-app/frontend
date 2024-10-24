import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify
import LandingPage from "./pages/LandingPage";
import RegisterStatus from "./pages/RegisterStatus";
import VendorSignUp from "./pages/VendorSignUp";
import VendorLogin from "./pages/VendorLogin";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";
import DashboardLayout from "./layouts/DashboardLayout";
import GetAll from "./pages/dashboard/components/GetAll";
import AddForm from "./pages/dashboard/components/AddForm";
import UpdateAdvert from "./pages/dashboard/components/UpdateAdvert";
import Prices from "./pages/dashboard/components/Prices";
import About from "./components/About";
import Resources from "./components/Resources";
import Settings from "./pages/dashboard/components/Settings";

import UserViewAds from "./pages/dashboard/components/UserViewAds";

import GetAllAdverts from "./pages/getadverts";
import SingleAdvert from "./pages/singleadd";
import VendorGet from "./pages/dashboard/components/Vendorget";
import ViewSingleAd from "./pages/dashboard/components/ViewSingleAd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <LandingPage />
    },
    {
      path: "/registerstatus",
      element: <RegisterStatus />
    },
    {
      path: "/vendorsignup",
      element: <VendorSignUp />
    },
    {
      path: "/vendorlogin",
      element: <VendorLogin />
    },
    {
      path: "/usersignup",
      element: <UserSignUp />
    },
    {
      path: "/userlogin",
      element: <UserLogin />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/resources",
      element: <Resources />,
    },
    {
      path: "/userviewads",

      element: <UserViewAds />
    },
    {

      path: "/user/singlead/:id",
      element:<ViewSingleAd/>
    },
    {
      path: "/getalladverts",
      element: <GetAllAdverts />
    },
    {
      path: "/advert/:id",
      element: <SingleAdvert />

    },
    {

      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <VendorGet />,
        },
        {
          path: "addform",
          element: <AddForm />,
        },
        {
          path: "updateadvert/:id",
          element: <UpdateAdvert />,
        },
        {
          path: "prices",
          element: <Prices />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },

  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );


}
export default App;
