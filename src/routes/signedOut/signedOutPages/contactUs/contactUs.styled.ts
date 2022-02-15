import styled from "styled-components";

export const CU_container = styled.div`
  flex: 1;
  display: flex;
  grid-template-columns: minmax(0, 30vw) auto;
  margin: 10rem 15rem;
  max-height: 70vh;
  border: 1px solid ${(props) => props.theme.secoundary.dark};
  border-radius: 0.5rem;

  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7rem 2rem;
  }
`;

export const CU_imageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary.light};
  min-width: 350px;

  @media (max-width: 1100px) {
    display: none;
    align-items: center;
    justify-content: center;
    margin: 7rem 5rem;
  }
`;

export const CU_image = styled.img`
  flex: 1;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CU_LogoTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.theme.secoundary.dark};
`;

export const CU_formContainer = styled.div`
  display: flex;
  flex: 2;
  padding: 10rem 15rem;
  flex-direction: column;

  @media (max-width: 1400px) {
    align-items: center;
    justify-content: center;
    padding: 2rem 5rem;
    width: 70%;
  }
`;

export const CU_formTitle = styled.h2`
  color: ${(props) => props.theme.secoundary.dark};
  font-size: 4rem;

  @media (max-width: 1400px) {
    font-size: 3rem;
    text-align: center;
    width: 100%;
  }
`;

export const CU_formSubitle = styled.h3`
  color: ${(props) => props.theme.primary.mid};
  font-size: 3rem;

  @media (max-width: 1400px) {
    font-size: 2rem;
    width: 100%;
    text-align: center;
  }
`;
//PIN: contact form

export const CU_form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  width: 100%;

  input,
  textarea {
    padding: 2rem 2rem;
    margin: 2rem 2rem;
    border: none;
    font-size: 2rem;
    border-bottom: 2px solid ${(props) => props.theme.secoundary.dark};
    color: ${(props) => props.theme.secoundary.dark};
    font-weight: 500;
  }
`;

export const CU_formTextarea = styled.textarea`
  max-width: 840px;
  max-height: 300px;
`;
