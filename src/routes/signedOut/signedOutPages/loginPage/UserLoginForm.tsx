import React from "react";
import { StyledButton } from "../../../../components/Hamburger/sidemenu/SideMenu.styled";
import { AuthForm, AuthFormInput, TextLink } from "./loginpage.styled";

const UserLoginForm = () => {
  return (
    <AuthForm>
      <AuthFormInput type="text" name="login" placeholder="Login" />
      <AuthFormInput type="text" name="password" placeholder="Password" />
      <StyledButton type="submit" value="login">
        Login
      </StyledButton>
      <TextLink to="/register">Not our member? Try to sign up there.</TextLink>
    </AuthForm>
  );
};

export default UserLoginForm;
