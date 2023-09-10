import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./root";
import type { RouteObject } from "react-router-dom";
import ErrorPage from "./error";
import Singup from "./pages/singup";
import Singin from "./pages/singin";
import App from "../App";
import Profile from "./pages/profile";
import RequireAuth from "./requireAuth";

let routes: RouteObject[] = [
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [{
            index: true,
            element: <App />,
            errorElement: <ErrorPage />,
        },{
            path: "*",
            element: <h1>error</h1>,
            errorElement: <ErrorPage />,
        },{
            path: "singup",
            element: <Singup />,
            errorElement: <ErrorPage />,
        },{
            path: "singin",
            element: <Singin />,
            errorElement: <ErrorPage />,
        },{
            path: "profile",
            element: (<RequireAuth>
                        <Profile />
                    </RequireAuth>),
            errorElement: <ErrorPage />,
        }]
    },
]

export const router = createBrowserRouter(routes);