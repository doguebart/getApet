import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};

export default Router;
