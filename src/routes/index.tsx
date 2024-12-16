import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Login } from '../pages';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/price" element={<div>Price Page</div>} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<div>Dashboard Page</div>} />
        <Route path="/settings" element={<div>Settings Page</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;