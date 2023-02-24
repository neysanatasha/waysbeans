import React from "react";
import {Outlet, Navigate} from "react-router-dom";

const AdminRoutes = () => {
    const auth = localStorage.getItem("adminLogin");
    return auth ? <Outlet /> : <Navigate to={"/"} />;
};

export default AdminRoutes;
