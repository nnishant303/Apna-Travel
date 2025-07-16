import React from "react";
import { Routes, Route } from "react-router-dom";

import Entry from "./Temp_pages/Entry";
import Login from "./Temp_pages/Login";
import Register from "./Temp_pages/Register";
import Layout from "./components/Layout/Layout"; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default App;
