import { CSSObject } from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  customStyle?: CSSObject;
  ButtonType: ButtonType;
  type?: "submit" | "reset" | "button";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonType = "github" | "review" | "custom" | "default";
