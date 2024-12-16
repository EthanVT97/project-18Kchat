import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useToast } from "../contexts/ToastContext";

const ProtectedRoute: React.FC = () => {
  const { showToast } = useToast();
  const isAuthenticated = false; // Replace with actual auth check

  if (!isAuthenticated) {
    showToast('Please login to access this page', 'warning');
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;