import styled from "styled-components";

interface HeaderProps {
  scrolledUp: boolean;
}

export const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  z-index: 10;
  background-color: ${(props) =>
    props.scrolledUp ? props.theme.primary.dark : "transparent"};
  padding: 0.5rem 0;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
`;
export const LogoContainer = styled.span`
  display: flex;
  width:fit-content
  flex-direction: row;
  user-select: none;

`;

export const ImageLogoContainer = styled.div`
  margin-left: 1rem;
  display: flex;
`;

export const ImageLogo = styled.img`
  flex: 1;
  object-fit: contain;
`;

export const LogoTitle = styled.h1`
  font-weight: 530;
  margin: 0;
  margin-left: 1rem;
  color: ${(props) => props.theme.secoundary.dark};
  text-decoration: none;
`;
