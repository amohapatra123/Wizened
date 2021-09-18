import React from "react";
const Home = React.lazy(() => import("../Container/Home"));
export const routes = [
    {
        id: 0,
        path: '/',
        component:Home
    }
]