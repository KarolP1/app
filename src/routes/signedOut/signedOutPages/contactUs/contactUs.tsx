import React from "react";
import {
  CU_container,
  CU_formContainer,
  CU_imageContainer,
  CU_LogoTitle,
} from "./contactUs.styled";
import { LogoSVG } from "../../../../assets/logo/logo_1x1";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import ContactUsForm from "./contactUsForm";

const ContactUs = () => {
  const appInfo = useSelector((state: RootState) => state.AppDependecies);
  return (
    <CU_container>
      <CU_imageContainer>
        <LogoSVG
          color={appInfo.theme.secoundary.dark}
          size={10}
          title="logomain"
        />
        <CU_LogoTitle>{appInfo.appName}</CU_LogoTitle>
      </CU_imageContainer>
      <CU_formContainer>
        <ContactUsForm />
      </CU_formContainer>
    </CU_container>
  );
};

export default ContactUs;
