import React from "react";
import { ToolbarMenuContainer } from "./sidemenu/SideMenu.styled";
import SidemenuButtonLink from "./sidemenu/SidemenuButtonLink";

const ToolBarMenu = () => {
  return (
    <ToolbarMenuContainer>
      <SidemenuButtonLink to="/" name="Home" inverted={false} />
      <SidemenuButtonLink to="/about" name="about" inverted={false} />
      <SidemenuButtonLink to="/contactus" name="Contact Us" inverted={false} />
      <SidemenuButtonLink to="/login" name="login" inverted={true} />
    </ToolbarMenuContainer>
  );
};

export default ToolBarMenu;
