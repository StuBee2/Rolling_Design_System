import { Dispatch, SetStateAction } from "react";
import { CSSObject } from "styled-components";

export interface InputProps {
  value: string;
  type: string;
  placeholder?: string;
  customStyle?: CSSObject;
  name?: string;
  handleChange: Dispatch<SetStateAction<string>>;
  isError?: boolean;
  errorMessage?: string;
}
