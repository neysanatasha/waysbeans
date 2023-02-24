import React from "react";
import {Outlet, Navigate} from "react-router-dom";

const UserRoutes = () => {
    const auth = localStorage.getItem("userLogin");
    return auth ? <Outlet /> : <Navigate to={"/"} />;
};

export default UserRoutes;
