import React from "react";
import { ToastProvider } from "react-toast-notifications";

interface Props {
  children: React.ReactNode;
}

export const RollingToastProvider = ({ children }: Props) => {
  return <ToastProvider>{children}</ToastProvider>;
};
