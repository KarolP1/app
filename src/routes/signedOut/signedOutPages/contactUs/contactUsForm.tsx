import React from "react";
import {
  CU_form,
  CU_formSubitle,
  CU_formTextarea,
  CU_formTitle,
} from "./contactUs.styled";

const ContactUsForm = () => {
  return (
    <>
      <CU_formTitle>Do you want to contact us ?</CU_formTitle>
      <CU_formSubitle>Send a message.</CU_formSubitle>

      <CU_form>
        {/* //TODO:if logged in nickname is login */}
        <input type="text" placeholder="Nickname" />
        <input type="text" placeholder="Email to reply back" />
        <CU_formTextarea
          placeholder="Type message here"
          onBlur={() => console.log("lostit")}
        />
      </CU_form>
    </>
  );
};

export default ContactUsForm;
