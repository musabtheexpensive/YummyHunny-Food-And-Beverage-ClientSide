import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import UpdateFood from "../components/UpdateFood";
import AddProduct from "../components/AddProduct";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/food'),
            },
            {
                path:"/addProduct",
                element:<AddProduct></AddProduct>,
            },
            {
                path:"/updateFood",
                element:<UpdateFood></UpdateFood>
            },
        ]
    }
])

export default router;