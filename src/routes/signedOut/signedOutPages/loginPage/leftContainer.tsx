import React from "react";
import { LoginSideContainerLeft } from "./loginpage.styled";
import image from "../../../../assets/sideImage.png";

const LeftContainer = () => {
  return (
    <LoginSideContainerLeft>
      <img
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "50vw",
        }}
        src={image}
        alt="leftsideImage"
      />
    </LoginSideContainerLeft>
  );
};

export default LeftContainer;
