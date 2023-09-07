import React from "react";
import { ButtonProps } from "./type";
import * as S from "./style";

export const Button = ({
  children,
  ButtonType,
  customStyle,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      customStyle={customStyle}
      ButtonType={ButtonType}
      onClick={(e) => {
        e.preventDefault();
        onClick!!();
      }}
    >
      {children}
    </S.Button>
  );
};
