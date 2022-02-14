import { LinkButton } from "./SidemenuButtonLink";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideList = styled.ul<{ open: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  width: 10rem;
  background-color: ${(props) => props.theme.primary.light};
  margin: 0;
  padding: 3rem 2rem;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(50rem)")};
  transition: 300ms ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9;

  @media (max-width: 1100px) {
    width: 50%;
    padding: 0;
    height: 100%;
  }
  @media (min-width: 1100px) {
    display: none;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
    height: 100%;
  }
`;

export const SideListItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(Link)<LinkButton>`
  //
  text-decoration: none;
  text-transform: capitalize;
  text-align:center;
  
  padding: 0.3rem 0;
  font-size:2rem;
  background-color: ${(props) =>
    props.inverted ? props.theme.secoundary.dark : "transparent"};
  }
  color: ${(props) =>
    !props.inverted
      ? props.theme.secoundary.dark
      : props.theme.secoundary.lightest};

  @media (min-width: 1100px) {
    padding: 0rem 1rem;
    border-radius: 0.2rem;
    margin: 0 0.5rem;
    border: 1px solid ${(props) => props.theme.secoundary.dark};
  }

  

  &:hover {
    color: ${(props) => props.theme.secoundary.mid};
    background-color: ${(props) => props.theme.secoundary.lightest};
  }
  @media (max-width: 1100px) {
    background-color:transparent;
    border:none;

    &:hover {
    color: ${(props) => props.theme.secoundary.light};
    background-color: transparent
  }
  }
`;

export const StyledButton = styled.button`
  //
  color: ${(props) => props.theme.secoundary.dark};
  font-size: 2rem;
  text-decoration: none;
  text-transform: capitalize;
  padding: 0.3rem 0.4rem;
  background-color: ${(props) => props.theme.primary.dark};

  @media (min-width: 1100px) {
    border-radius: 0.2rem;
    border: 1px solid ${(props) => props.theme.secoundary.dark};
  }

  &:hover {
    color: ${(props) => props.theme.primary.dark};
    background-color: ${(props) => props.theme.secoundary.dark};
  }
`;

export const ToolbarMenuContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1100px) {
    display: none;
  }
`;
