import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";
import DashBoard from "../screens/dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/DashBoard" element={<DashBoard />} />
    </Routes>
  );
};

export default Router;
