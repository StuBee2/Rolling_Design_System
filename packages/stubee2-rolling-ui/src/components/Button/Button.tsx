import React from "react";
import { ButtonProps } from "./type";
import * as S from "./style";

export const Button = ({ ...attr }: ButtonProps) => {
  return (
    <S.Button {...attr} />
  );
};
