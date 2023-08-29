import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from "styled-components";
import { ButtonType } from "./type";

export const Button = styled.button<{
  customStyle: CSSObject;
  ButtonType: ButtonType;
}>`
  cursor: pointer;
  ${({ customStyle }) => customStyle};
  ${({ ButtonType }) => getButton[ButtonType]}
`;

const getButton: Record<ButtonType, FlattenSimpleInterpolation> = {
  github: css`
    width: 515px;
    height: 75px;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    padding: 1rem 2rem;
  `,
  normal: css`
    width: 130px;
    height: 55px;
    background-color: rgba(29, 30, 90, 1);
    color: #fff;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 400;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  `,
  review: css`
    width: 153px;
    height: 52px;
    border-radius: 7px;
    background-color: rgba(29, 30, 90, 1);
    color: #fff;
    outline: none;
    border: none;
    font-size: 18px;
    font-weight: 400;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  `,
};
