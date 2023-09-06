import { CSSObject } from "styled-components";

export interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  customStyle?: CSSObject;
  name: string;
}
