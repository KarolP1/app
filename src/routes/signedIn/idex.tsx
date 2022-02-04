import React from "react";
import { Route, Routes } from "react-router-dom";

const SignedInRoutes = () => (
  <Routes>
    <Route path="/" element={<div>App logged in</div>} />
  </Routes>
);
export default SignedInRoutes;
