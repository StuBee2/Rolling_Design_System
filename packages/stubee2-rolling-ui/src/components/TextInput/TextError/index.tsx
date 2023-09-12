import React from "react";
import * as S from "./style";
import { IoWarningOutline } from "@react-icons/all-files/io5/IoWarningOutline";

interface Props {
  errorMessage: string;
}

export default function TextError({ errorMessage }: Props) {
  return (
    <S.ErrorContainer>
      <IoWarningOutline size={15} color={"#FB2047"} />
      <p>{errorMessage}</p>
    </S.ErrorContainer>
  );
}
