import React from "react";
import { StyledButton } from "../../../../components/Hamburger/sidemenu/SideMenu.styled";
import {
  CuCform,
  CuCformSubitle,
  CuCformTextarea,
  CuCformTitle,
} from "./contactUs.styled";

const ContactUsForm = () => {
  return (
    <>
      <CuCformTitle>Do you want to contact us ?</CuCformTitle>
      <CuCformSubitle>Send a message.</CuCformSubitle>

      <CuCform>
        {/* //TODO:if logged in nickname is login */}
        <input type="text" placeholder="Nickname" />
        <input type="text" placeholder="Email to reply back" />
        <CuCformTextarea
          placeholder="Type message here"
          onBlur={() => console.log("lostit")}
        />
        <StyledButton type="submit">send</StyledButton>
      </CuCform>
    </>
  );
};

export default ContactUsForm;
