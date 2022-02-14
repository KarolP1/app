import React, { useState } from "react";
import {
  HeaderContainer,
  ImageLogoContainer,
  LogoContainer,
} from "./Header.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { LogoSVG } from "../../assets/logo/logo_2_3";
import { HamburgerMenu } from "../Hamburger";
import SideMenu from "../Hamburger/sidemenu/SideMenu";
import ProfileBox from "../Profile";
import ToolBarMenu from "../Hamburger/ToolBarMenu";

const Header = (props: any) => {
  const appInfo = useSelector((state: RootState) => state.AppDependecies);
  const [colorOnAppbar, setColorOnAppbar] = useState<boolean>(false);

  const checkScrollY = () => {
    if (window.scrollY > 500) return true;
    else return false;
  };
  window.addEventListener("scroll", () => {
    var bool = checkScrollY();
    setColorOnAppbar(bool);
  });

  return (
    <div style={{ position: "relative" }}>
      <HeaderContainer scrolledUp={colorOnAppbar}>
        <LogoContainer>
          <ImageLogoContainer to="/">
            <LogoSVG
              color={appInfo.theme.secoundary.dark}
              size={2}
              title="logomain"
            />
          </ImageLogoContainer>
        </LogoContainer>
        {appInfo.isUserSignedIn === true && <ProfileBox />}
        <ToolBarMenu />
        <HamburgerMenu open={appInfo.isMenuOpen} />
      </HeaderContainer>
      <SideMenu open={appInfo.isMenuOpen} />
    </div>
  );
};

export default Header;
