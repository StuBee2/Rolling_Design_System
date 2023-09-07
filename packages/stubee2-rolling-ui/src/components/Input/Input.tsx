import { InputProps } from "./type";
import * as S from "./style";
import React from "react";

export const Input = ({
  value,
  type,
  placeholder,
  name,
  customStyle,
  onChange,
}: InputProps) => {
  return (
    <S.InputContainer
      customStyle={customStyle}
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
