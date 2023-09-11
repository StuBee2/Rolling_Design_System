import { InputProps } from "./type";
import * as S from "./style";
import React from "react";
import error from "../../assets/error.svg";

export const Input = ({
  handleChange,
  isError,
  errorMessage,
  ...attr
}: InputProps) => {
  return (
    <>
      <S.InputContainer
        onChange={(e) => handleChange(e.target.value)}
        isError={isError}
        {...attr}
      />
      {isError && <S.ErrorContainer>
        <img src={error} alt="이미지 없음" />
        <p>{errorMessage}</p>
      </S.ErrorContainer>}
    </>
  );
};
