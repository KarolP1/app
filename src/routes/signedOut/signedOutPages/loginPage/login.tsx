import React from "react";
import AuthContainer from "../../../../components/AuthContainer";
import LeftContainer from "./leftContainer";
import { ViewContainer } from "./loginpage.styled";

const Login = () => {
  return (
    <ViewContainer>
      <LeftContainer />
      <AuthContainer destination="login" />
    </ViewContainer>
  );
};

export default Login;
