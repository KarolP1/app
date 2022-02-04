import styled from "styled-components";

export const SideList = styled.ul<{ open: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  width: 10rem;
  background-color: ${(props) => props.theme.primary.light};
  margin: 0;
  padding: 3rem 2rem;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(40rem)")};
  transition: 300ms ease;

  @media (max-width: 1100px) {
    width: 50%;
    padding: 0;
    height: 100%;
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
