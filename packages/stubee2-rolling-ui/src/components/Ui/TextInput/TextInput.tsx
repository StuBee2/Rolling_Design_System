import { TextInputProps } from "./type";
import React from "react";
import * as S from "./style";

export const TextInput = ({
  handleChange,
  textType,
  inputRef,
  isError,
  errorMessage,
  ...attr
}: TextInputProps) => {
  return (
    <>
      <S.TextInputBar
        as={textType}
        onChange={handleChange}
        isError={isError}
        ref={inputRef}
        {...attr}
      />
      {isError && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </>
  );
};
