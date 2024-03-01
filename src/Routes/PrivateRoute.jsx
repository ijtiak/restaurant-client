// import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    // useEffect(() => {
    //     if (loading) return <progress className="progress w-56 mt-56 mb-24 mx-96"></progress>
    // }, [loading])

    if(loading) return <progress className="progress w-56 mt-56 mb-24 mx-96"></progress>

    if (user) return children;

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;

// TODO: fixed the loading issues, remember the problems while refreshing the secret page that is in the private route.