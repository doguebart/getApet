import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";
import DashBoard from "../screens/dashboard";
import UserPets from "../screens/pets/userPets";
import AddPet from "../screens/pets/addPet";
import EditPet from "../screens/pets/editPet";
import PetDetails from "../screens/pets/petDetails";
import Adoptions from "../screens/adoptions";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/UserPets" element={<UserPets />} />
      <Route path="/AddPet" element={<AddPet />} />
      <Route path="/pet/edit/:id" element={<EditPet />} />
      <Route path="/pet/:id" element={<PetDetails />} />
      <Route path="/pet/myadoptions" element={<Adoptions />} />
    </Routes>
  );
};

export default Router;
