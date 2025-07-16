import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../Temp_pages/Home';
import Tours from '../Temp_pages/Tours';
import TourDetails from '../Temp_pages/TourDetails';
import SearchResultList from '../Temp_pages/SearchResultList';
import Login from '../Temp_pages/Login';        // Import your login page
import Register from '../Temp_pages/Register';  // Import your register page
import PrivateRoute from './PrivateRoute';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      
      {/* ✅ Open routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ✅ Protected routes */}
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/tours" element={<PrivateRoute><Tours /></PrivateRoute>} />
      <Route path="/tours/:id" element={<PrivateRoute><TourDetails /></PrivateRoute>} />
      <Route path="/tours/search" element={<PrivateRoute><SearchResultList /></PrivateRoute>} />
    </Routes>
  );
};

export default Routers;
