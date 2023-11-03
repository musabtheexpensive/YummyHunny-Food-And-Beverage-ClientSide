import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import UpdateFood from "../components/UpdateFood";
import AddProduct from "../components/AddProduct";
import Login from "../components/Login";
import Register from "../components/Register";
import Food from "../components/Food";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(" https://assignment10-foodandbevarage-serverside-lrn6wtvcr.vercel.app/food"),
      },
      {
        path: "/food/:id",
        element: <PrivateRoutes><Food></Food></PrivateRoutes>,
        loader: () => fetch(" https://assignment10-foodandbevarage-serverside-lrn6wtvcr.vercel.app/food"),
      },
      {
        path: "/addProduct",
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>,
      },
      {
        path: "/updateFood",
        element: <UpdateFood></UpdateFood>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
