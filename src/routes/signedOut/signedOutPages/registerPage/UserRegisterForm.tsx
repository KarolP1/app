import React from "react";
import { StyledButton } from "../../../../components/Hamburger/sidemenu/SideMenu.styled";
import {
  AuthForm,
  AuthFormInput,
  TextLink,
} from "../loginPage/loginpage.styled";

const UserRegisterForm = () => {
  return (
    <AuthForm>
      <AuthFormInput type="text" name="login" placeholder="Login" />
      <AuthFormInput type="password" name="password" placeholder="Password" />
      <AuthFormInput
        type="password"
        name="confirmPassword"
        placeholder="Confirm pasword"
      />
      <AuthFormInput type="text" name="name" placeholder="Name" />
      <AuthFormInput type="text" name="surname" placeholder="Surname" />
      <AuthFormInput type="text" name="email" placeholder="email" />
      <StyledButton type="submit" value="login">
        Register
      </StyledButton>
      <TextLink to="/login">Alreaty our member? Sign in here.</TextLink>
    </AuthForm>
  );
};

export default UserRegisterForm;
