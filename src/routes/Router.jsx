
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/public/news.json')
        },
        {
            path: "/news/:id",
            element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
            loader: () => fetch("/news.json")
        },
        {
            path: "/about",
            element: <About></About>,
        },
        {
            path: "/career",
            element: <Career></Career>,
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/newscategory",
          element: <Register></Register>
        },
      ]
    },
  ]);
  export default router;