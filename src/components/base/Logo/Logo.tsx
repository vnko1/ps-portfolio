import React from "react";
import clsx from "clsx";

import styles from "./Logo.module.scss";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a href="/" className={clsx(styles.logo, className)}>
      LOGO
    </a>
  );
};

export default Logo;
