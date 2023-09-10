import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

interface childrenType {
    children: React.JSX.Element,
}

function RequireAuth({children}: childrenType) {
    console.log(auth);
    if (!(auth.currentUser))
        return <Navigate to="/singin" ></Navigate>;
    return children;
}

export default RequireAuth;