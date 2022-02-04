import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./signedOutPages/home";
import Login from "./signedOutPages/login";
import Register from "./signedOutPages/register";

const SignedOutRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);
export default SignedOutRoutes;
