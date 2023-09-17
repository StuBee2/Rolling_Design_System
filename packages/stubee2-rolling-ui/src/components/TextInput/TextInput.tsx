import { TextInputProps } from "./type";
import React from "react";
import * as S from "./style";
import Error from "../common/Error";

export const TextInput = ({
  handleObjectChange,
  handleStringChange,
  errorMessage,
  textType,
  ...attr
}: TextInputProps) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (handleObjectChange) {
      handleObjectChange((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } else {
      handleStringChange!!(e.target.value);
    }
  };
  return (
    <S.TextInputContainer>
      <S.TextInputBar as={textType} onChange={handleInputChange} {...attr} />
      {attr.isError && <Error errorMessage={errorMessage!!} />}
    </S.TextInputContainer>
  );
};
