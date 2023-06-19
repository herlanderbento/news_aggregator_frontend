import { ButtonHTMLAttributes } from "react";
import "./styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "secondary-with-border" | "logout";
};

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={`btn btn-${props.variant}`}>
      {props.children}
    </button>
  );
}
