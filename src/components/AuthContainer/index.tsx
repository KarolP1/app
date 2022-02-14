import React from "react";
import { useSelector } from "react-redux";
import { LogoSVG } from "../../assets/logo/logo_1x1";
import UserRegisterForm from "../../routes/signedOut/registerPage/UserRegisterForm";
import {
  LoginContent,
  LoginSideContainer,
} from "../../routes/signedOut/signedOutPages/loginPage/loginpage.styled";
import UserLoginForm from "../../routes/signedOut/signedOutPages/loginPage/UserLoginForm";
import { RootState } from "../../store";
import { ImageLogoContainer, LogoContainer } from "../Header/Header.styled";

interface AuthProps {
  children?: React.ReactNode;
  destination: string;
}

const AuthContainer = ({ children, destination }: AuthProps) => {
  const appInfo = useSelector((state: RootState) => state.AppDependecies);
  return (
    <LoginSideContainer>
      <LoginContent>
        <LogoContainer>
          <ImageLogoContainer>
            <LogoSVG
              color={appInfo.theme.secoundary.dark}
              size={10}
              title="logomain"
            />
          </ImageLogoContainer>
        </LogoContainer>
        {destination === "login" && <UserLoginForm />}
        {destination === "register" && <UserRegisterForm />}
        {children}
      </LoginContent>
    </LoginSideContainer>
  );
};
export default AuthContainer;
