import styled, { CSSObject } from "styled-components";

export const TextInputBar = styled.input<{
  customStyle?: CSSObject;
  isError?: boolean;
}>`
  ${({ customStyle }) => customStyle}
  border: ${({ isError }) => isError && "1px solid rgba(241, 40, 28, 1)"};
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
