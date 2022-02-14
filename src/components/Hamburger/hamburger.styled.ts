import styled from "styled-components";

interface BurgerProp {
  open: boolean;
}

export const StyledHamburgerMenu = styled.div<BurgerProp>`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
  }
  div {
    z-index: 100;
    width: 3rem;
    height: 0.3rem;
    background-color: ${({ open, theme }) =>
      open ? theme.secoundary.dark : theme.secoundary.dark};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
