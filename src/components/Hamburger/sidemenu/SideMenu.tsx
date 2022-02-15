import React from "react";
import { EmptyBox } from "../../defaultStyles";
import { SideList } from "./SideMenu.styled";
import SidemenuButtonLink from "./SidemenuButtonLink";

const SideMenu = (props: { open: boolean }) => {
  return (
    <SideList open={props.open}>
      <EmptyBox height={6} withLine={true} />
      <SidemenuButtonLink to="/" name="home" inverted={false} />
      <SidemenuButtonLink to="/about" name="about" inverted={false} />
      <SidemenuButtonLink to="/contactus" name="contact" inverted={false} />
      <SidemenuButtonLink to="/login" name="login" inverted={true} />
      <EmptyBox height={0.1} withLine={true} />
    </SideList>
  );
};

export default SideMenu;
