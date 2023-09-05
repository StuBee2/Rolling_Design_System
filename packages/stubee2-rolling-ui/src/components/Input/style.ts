import styled, { CSSObject } from "styled-components";

export const InputContainer = styled.input<{
  customStyle?: CSSObject;
}>`
  ${({ customStyle }) => customStyle}
`;
