
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import LandingPage from "./pages/LandingPage";
import RegisterStatus from './pages/RegisterStatus';
import VendorSignUp from './pages/VendorSignUp';
import VendorLogin from './pages/VendorLogin';

function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },
  {
    path:"/registerstatus",
    element:<RegisterStatus/>
  },
  {
    path:"/vendorsignup",
    element:<VendorSignUp/>
  },
  {
    path:"/vendorlogin",
    element:<VendorLogin/>
  },
])
return <RouterProvider router={router}/>
}


export default App;
