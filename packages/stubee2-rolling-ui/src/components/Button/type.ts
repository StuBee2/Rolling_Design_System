import { CSSObject } from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  customStyle?: CSSObject;
  ButtonType: ButtonType;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export type ButtonType = "github" | "review" | "custom" | "default";
