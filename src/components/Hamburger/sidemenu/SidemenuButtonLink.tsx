import React from "react";
import { useDispatch } from "react-redux";
import { setIsMenuOpen } from "../../../store/AppDependencies";
import { StyledLink } from "./SideMenu.styled";

export interface LinkButton {
  to: string;
  name?: string;
  inverted?: boolean;
}

const SidemenuButtonLink = ({ to, name, inverted }: LinkButton) => {
  const dispatch = useDispatch();

  return (
    <StyledLink
      to={to}
      onClick={() => dispatch(setIsMenuOpen())}
      inverted={inverted}
    >
      {name}
    </StyledLink>
  );
};

export default SidemenuButtonLink;
