import React from "react";
import {
  CuCcontainer,
  CuCformContainer,
  CuCimageContainer,
  CuCLogoTitle,
} from "./contactUs.styled";
import { LogoSVG } from "../../../../assets/logo/logo_1x1";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import ContactUsForm from "./contactUsForm";

const ContactUs = () => {
  const appInfo = useSelector((state: RootState) => state.AppDependecies);
  return (
    <CuCcontainer>
      <CuCimageContainer>
        <LogoSVG
          color={appInfo.theme.secoundary.dark}
          size={10}
          title="logomain"
        />
        <CuCLogoTitle>{appInfo.appName}</CuCLogoTitle>
      </CuCimageContainer>
      <CuCformContainer>
        <ContactUsForm />
      </CuCformContainer>
    </CuCcontainer>
  );
};

export default ContactUs;
