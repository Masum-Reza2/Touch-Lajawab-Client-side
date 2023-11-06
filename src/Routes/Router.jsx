import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems"
import Home from "../Pages/Home/Home"
import Blog from "../Pages/Blog/Blog"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Users from "../Pages/Users/Users"
import AddAfood from "../Pages/AddAfood/AddAfood"
import MyAddedFoods from "../Pages/MyAddedFoods/MyAddedFoods"
import MyOrderedFoods from "../Pages/MyOrderedFoods/MyOrderedFoods"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct"
import FoodOrderPage from "../Pages/FoodOrderPage/FoodOrderPage"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/allfood', element: <AllFoodItems />,
                loader: () => fetch('http://localhost:5000/foodCount')
            },
            { path: '/blogs', element: <Blog /> },
            { path: '/users', element: <Users /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },

            // CRUD pages
            { path: '/addAfood', element: <PrivateRoute><AddAfood /></PrivateRoute> },
            { path: '/myAddedFoods', element: <PrivateRoute><MyAddedFoods /></PrivateRoute> },
            { path: '/myOrderedFoods', element: <PrivateRoute><MyOrderedFoods /></PrivateRoute> },
            {
                path: '/update/:id', element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allFoods/${params.id}`)
            },
            {
                path: '/orderFood/:id', element: <FoodOrderPage />,
                loader: ({ params }) => fetch(`http://localhost:5000/allFoods/${params.id}`)
            }
        ]
    }
])
export default Router