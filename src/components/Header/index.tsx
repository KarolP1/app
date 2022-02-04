import React from "react";
import {
  HeaderContainer,
  ImageLogoContainer,
  LogoContainer,
} from "./Header.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { LogoSVG } from "../../assets/logo";
import { HamburgerMenu } from "../Hamburger";
import SideMenu from "../Hamburger/sidemenu/SideMenu";

const Header = (props: any) => {
  const appInfo = useSelector((state: RootState) => state.AppDependecies);
  console.log(props.theme);
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <ImageLogoContainer>
            <LogoSVG
              color={appInfo.theme.secoundary.dark}
              size={512}
              title="logomain"
            />
          </ImageLogoContainer>
          {/* <LogoTitle>{appInfo.appName}</LogoTitle> */}
        </LogoContainer>
        <HamburgerMenu open={appInfo.isMenuOpen} />
      </HeaderContainer>
      <SideMenu open={appInfo.isMenuOpen} />
    </>
  );
};

export default Header;
