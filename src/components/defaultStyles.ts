import styled from "styled-components";

interface EmptyBoxI {
  height?: number;
  width?: number;
  withLine?: boolean;
}

export const EmptyBox = styled.div<EmptyBoxI>`
  height: ${(props) => `${!props.height ? 1 : props.height}rem`};
  width: ${(props) => `${!props.width ? "90%" : props.width + "rem"}`};
  border-bottom: ${(props) => (props.withLine ? `2px solid ` : null)};
  border-color: ${(props) => props.theme.secoundary.dark};
`;
