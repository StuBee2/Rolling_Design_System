import { InputProps } from "./type";
import * as S from "./style";
import React from "react";
import error from "../../assets/error.svg";

export const Input = ({
  value,
  type,
  placeholder,
  name,
  customStyle,
  handleChange,
  isError,
}: InputProps) => {
  return (
    <>
      <S.InputContainer
        customStyle={customStyle}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
        isError={isError}
      />
      {/* setState((prev) => { ...prev, id: true }); */}
      {isError && <S.ErrorContainer>
        <img src={error} alt="이미지 없음" />
        <p>{placeholder}</p>
      </S.ErrorContainer>}
    </>
  );
};
