import { TextInputProps } from "./type";
import React from "react";
import * as S from "./style";
import TextError from "../TextError";

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
      {attr.isError && <TextError errorMessage={errorMessage!!} />}
    </S.TextInputContainer>
  );
};
