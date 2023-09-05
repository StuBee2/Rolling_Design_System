import React from "react";
import { ButtonProps } from "./type";
import * as S from "./style";

export const Button = ({ children, ButtonType, customStyle }: ButtonProps) => {
  return (
    <S.Button customStyle={customStyle} ButtonType={ButtonType}>
      {children}
    </S.Button>
  );
};
