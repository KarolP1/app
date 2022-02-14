import React from "react";
import { LoginSideContainerLeft } from "./loginpage.styled";
import image from "../../../../assets/sideImage.png";

const LeftContainer = () => {
  return (
    <LoginSideContainerLeft>
      <div style={{ backgroundColor: "red", flex: 1, maxWidth: "100vh" }}></div>
    </LoginSideContainerLeft>
  );
};

export default LeftContainer;
