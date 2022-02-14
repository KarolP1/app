import React from "react";
import AuthContainer from "../../../components/AuthContainer";
import LeftContainer from "../signedOutPages/loginPage/leftContainer";
import { ViewContainer } from "../signedOutPages/loginPage/loginpage.styled";

const Register = () => {
  return (
    <ViewContainer>
      <LeftContainer />
      <AuthContainer destination="register" />
    </ViewContainer>
  );
};

export default Register;
