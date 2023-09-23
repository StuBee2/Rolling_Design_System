import { TextInputProps } from "./type";
import React from "react";
import * as S from "./style";
import Error from "../common/Error";

export const TextInput = ({
  handleChange,
  errorMessage,
  textType,
  ...attr
}: TextInputProps) => {
  return (
    <S.TextInputContainer>
      <S.TextInputBar as={textType} onChange={handleChange} {...attr} />
      {attr.isError && <Error errorMessage={errorMessage!!} />}
    </S.TextInputContainer>
  );
};
