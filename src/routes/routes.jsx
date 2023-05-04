import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes/ChefRecipes";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "registration",
                element: <Registration></Registration>
            },
            {
                path: "recipes/:id",
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({ params }) => { return params.id }
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            }
        ]
    },
]);

export default router;