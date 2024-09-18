import React, { ButtonHTMLAttributes } from "react";
import { GrMenu } from "react-icons/gr";

import styles from "./MenuBtn.module.scss";
import clsx from "clsx";

interface MenuBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ className, ...props }) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      <GrMenu size={24} />
    </button>
  );
};

export default MenuBtn;
