import React from "react";
const Home = React.lazy(() => import("../Container/Home"));
const Dashboard = React.lazy(() => import("../Container/Dashboard"));
const Profile = React.lazy(() => import("../Container/Profile"));
export const routes = [
    {
        id: 0,
        path: '/',
        component:Home
    },
    {
        id: 1,
        path: '/d',
        component:Dashboard
    },
    {
        id: 2,
        path: '/p',
        component:Profile
    }
]