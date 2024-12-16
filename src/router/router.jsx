import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJobPage from "../Pages/ApplyJobPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
          path:"/jobDetails/:id",
         element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
         loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)

        },
        {
          path:'/applyJob/:id',
          element:<PrivateRoute><ApplyJobPage></ApplyJobPage></PrivateRoute>
        },
        {
            path:"/register",
            element:<RegisterPage></RegisterPage>

        },
        {
            path:"/login",
            element:<LoginPage></LoginPage>
        }
      ]
    },
  ]);

  export default router