import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./signedOutPages/about";
import ContactUs from "./signedOutPages/contactUs";
import Home from "./signedOutPages/home";
import Login from "./signedOutPages/loginPage/login";
import Register from "./registerPage/register";

const SignedOutRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/register" element={<Register />} />
    <Route path="/contactus" element={<ContactUs />} />
  </Routes>
);
export default SignedOutRoutes;
