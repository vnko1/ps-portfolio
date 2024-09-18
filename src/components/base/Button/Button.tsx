import React, { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  href?: string;
  variant?: "outlined" | "contained";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  variant = "outlined",
  ...props
}) => {
  if (href)
    return (
      <Link
        className={clsx(styles.button, styles[variant], className)}
        href={href}
      >
        {children}
      </Link>
    );

  return (
    <button
      {...props}
      className={clsx(styles.button, styles[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
