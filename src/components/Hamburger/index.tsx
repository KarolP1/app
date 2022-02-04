import { useDispatch } from "react-redux";
import { setIsMenuOpen } from "../../store/AppDependencies";
import { StyledHamburgerMenu } from "./hamburger.styled";

export const HamburgerMenu = (props: { open: boolean }) => {
  const dispatch = useDispatch();

  return (
    <StyledHamburgerMenu
      open={props.open}
      onClick={() => dispatch(setIsMenuOpen())}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburgerMenu>
  );
};
