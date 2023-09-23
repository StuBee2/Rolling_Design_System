import { Dispatch, SetStateAction } from "react";
import { CSSObject } from "styled-components";

export interface TextInputProps {
  value: string;
  type?: string;
  textType?: "input" | "textarea";
  handleChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  placeholder?: string;
  customStyle?: CSSObject;
  name?: string;
  isError?: boolean;
  errorMessage?: string;
  autocomplete?: "on" | "off";
}
