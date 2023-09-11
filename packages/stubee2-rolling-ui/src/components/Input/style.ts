import styled, { css, CSSObject } from "styled-components";

export const InputContainer = styled.input<{
  customStyle?: CSSObject;
  isError?: boolean;
}>`
  ${({ customStyle }) => customStyle}
  border: ${({ isError }) => isError && "1px solid rgba(214, 21, 9, 1)"};
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  img {
    width: 16px;
    height: 16px;
  }
  p {
    font-size: 12px;
    color: rgba(214, 21, 9, 1);
  }
`;
