import { ReactNode } from "react";
import "./button.css";

export default function Button({ children }: { children: ReactNode }) {
  return <button className="button">{children}</button>;
}
