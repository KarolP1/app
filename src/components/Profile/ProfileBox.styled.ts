import styled from "styled-components";

export const ProfileBoxContainer = styled.div`
  margin-right: 5rem;
  height: 100%;
  background-color: ${(props) => props.theme.primary.light};
  border-radius: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const ImageCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 2rem;
  margin: 3px;
  background-color: ${(props) => props.theme.secoundary.dark};
`;

export const ImageLetters = styled.p`
  user-select: none;
  color: ${(props) => props.theme.primary.mid};
  font-size: 1rem;
  font-weight: 900;
`;
export const InfoBox = styled.div`
  margin: 0;
  padding: 0;
  margin-left: 1rem;
  color: ${(props) => props.theme.secoundary.dark};
  flex: 1;

  text-transform: capitalize;
  padding-right: 1rem;
`;
