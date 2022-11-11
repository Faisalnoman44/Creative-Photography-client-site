import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:([
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/services',
            element:<Services></Services>
        },
        {
            path:'/addservices',
            element:<AddServices></AddServices>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Signup></Signup>
        }

        
      ])
    }
  ]) 

  export default router