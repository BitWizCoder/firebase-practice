import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

export default function PrivateRoutes() {
  const [user, loading] = useAuthState(auth);

  if (loading) <p>Loading user data...</p>;
  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
}
