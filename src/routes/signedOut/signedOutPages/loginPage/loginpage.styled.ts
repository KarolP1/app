import { Link } from "react-router-dom";
import styled from "styled-components";

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const LoginSideContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const LoginSideContainerLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;
export const LoginContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: min-content;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AuthFormInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.2rem 2rem;
  border: 2px solid ${(props) => props.theme.secoundary.light};
  border-radius: 0.2rem;
  height: 3rem;
  font-size: 1.5rem;

  &:focus {
    border: 2px solid ${(props) => props.theme.primary.dark};
  }
`;
export const TextLink = styled(Link)`
  margin-top: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.secoundary.dark};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
