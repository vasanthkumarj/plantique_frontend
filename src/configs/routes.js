import React, { lazy } from "react";

import Login from "../page_components/Login";
import Signup from "../page_components/Signup";
import UserHome from "../page_components/UserHome";
import NotFound from "../common_components/NotFound";

export default [
    {
        path: `/`,
        element: <Login />
    },
    {
        path: `/login`,
        element: <Login />
    },
    {
        path: `/signup`,
        element: <Signup />
    },
    {
        path: `/home`,
        element: <UserHome />
    },
    {
        // Nothing matched, default.
        path: `*`,
        element: <NotFound />
    }
]