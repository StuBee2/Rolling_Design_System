import ReactDom from "react-dom";
import { PortalProps } from "./type";

export const Portal = ({ children, id }: PortalProps) => {
  const el = document.getElementById(id) as HTMLElement;
  return ReactDom.createPortal(children, el);
};
