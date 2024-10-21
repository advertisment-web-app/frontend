
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import LandingPage from "./pages/LandingPage";
import RegisterStatus from './pages/RegisterStatus';
import VendorSignUp from './pages/VendorSignUp';
import VendorLogin from './pages/VendorLogin';
<<<<<<< HEAD
import UserSignUp from './pages/UserSignUp';
import UserLogin from './pages/UserLogin';
=======
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
>>>>>>> master

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
  {
    path:"/usersignup",
    element:<UserSignUp/>
  },
  {
    path:"/userlogin",
    element:<UserLogin/>
<<<<<<< HEAD
  }
=======
  },
>>>>>>> master
  
])
return <RouterProvider router={router}/>
}


export default App;
