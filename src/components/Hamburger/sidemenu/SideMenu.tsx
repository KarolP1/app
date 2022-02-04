import React from "react";
import { SideList, SideListItem } from "./SideMenu.styled";

const SideMenu = (props: { open: boolean }) => {
  return (
    <SideList open={props.open}>
      <SideListItem>home</SideListItem>
      <SideListItem>login</SideListItem>
      <SideListItem>about</SideListItem>
    </SideList>
  );
};

export default SideMenu;
