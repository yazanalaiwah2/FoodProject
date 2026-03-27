import { ReactNode, ButtonHTMLAttributes } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  textOnly?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  textOnly,
  className = "",
  ...props
}: ButtonProps) => {
  const cssClasses = textOnly
    ? `${classes.textButton} ${className}`
    : `${classes.button} ${className}`;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};
