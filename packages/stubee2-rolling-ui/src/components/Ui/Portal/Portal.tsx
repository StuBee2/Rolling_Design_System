import ReactDom from "react-dom";
import { PortalProps } from "./type";

export default function Portal({ children }: PortalProps) {
  const el = document.getElementById("modal") as HTMLElement;
  return ReactDom.createPortal(children, el);
}
