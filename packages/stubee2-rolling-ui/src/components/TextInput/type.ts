import { Dispatch, SetStateAction } from "react";
import { CSSObject } from "styled-components";

export interface TextInputProps {
  value: string;
  type?: string;
  textType?: "input" | "textarea";
  handleObjectChange?: Dispatch<SetStateAction<Record<string, string>>>;
  handleStringChange?: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  customStyle?: CSSObject;
  name?: string;
  isError?: boolean;
  errorMessage?: string;
}
