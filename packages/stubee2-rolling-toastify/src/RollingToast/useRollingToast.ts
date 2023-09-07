import { rollingToastAppearanceType } from "./rollingToastType";
import { useToasts } from "react-toast-notifications";

export const useRollingToast = () => {
  const { addToast } = useToasts();

  const rollingToast = (content: string, type: rollingToastAppearanceType) => {
    addToast(content, {
      appearance: type,
      autoDismiss: true,
    });
  };
  return { rollingToast };
};
