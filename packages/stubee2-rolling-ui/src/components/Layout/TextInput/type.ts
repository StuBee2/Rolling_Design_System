import { CSSObject } from "styled-components";

export interface TextInputProps {
  value: string;
  type?: string;
  textType?: "input" | "textarea";
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  customStyle?: CSSObject;
  name?: string;
  autoComplete?: "on" | "off";
  disabled?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  onFocus?: () => void;
  onBlur?: () => void;
  isError?: boolean;
  errorMessage?: string;
}
