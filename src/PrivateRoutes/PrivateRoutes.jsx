// src/PrivateRoutes/PrivateRoute.jsx
import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProivder"; // Ensure this path is correct
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading........</div>; // Show a loading indicator while checking auth state
  }

  if (user) {
    return <Navigate to="/login" state={{ from: location }} replace />; // Redirect to login if not authenticated
  }

  return children; // Render the children (protected component) if authenticated
};

export default PrivateRoute;
