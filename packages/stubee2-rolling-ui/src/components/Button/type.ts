import { CSSObject } from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  customStyle: CSSObject;
  ButtonType: ButtonType;
}

export type ButtonType = "github" | "review" | "default";
