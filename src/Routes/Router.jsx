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


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: '/allfood', element: <AllFoodItems /> },
            { path: '/blogs', element: <Blog /> },
            { path: '/users', element: <Users /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },

            // CRUD pages
            { path: '/addAfood', element: <AddAfood /> },
            { path: '/myAddedFoods', element: <MyAddedFoods /> },
            { path: '/myOrderedFoods', element: <MyOrderedFoods /> },
        ]
    }
])
export default Router