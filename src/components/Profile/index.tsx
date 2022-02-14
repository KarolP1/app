import React from "react";
import {
  ImageCircle,
  ImageLetters,
  InfoBox,
  ProfileBoxContainer,
} from "./ProfileBox.styled";

const ProfileBox = () => {
  return (
    <ProfileBoxContainer>
      <ImageCircle>
        <ImageLetters>KP</ImageLetters>
      </ImageCircle>
      <InfoBox>Karol Platek</InfoBox>
    </ProfileBoxContainer>
  );
};

export default ProfileBox;
