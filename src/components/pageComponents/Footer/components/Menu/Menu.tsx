import React from "react";
import clsx from "clsx";

import { CustomLink } from "@/components/base";
import { links } from "@/utils";
import styles from "./Menu.module.scss";

interface MenuProps {
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ className }) => {
  return (
    <div className={clsx(styles.menu, className)}>
      <h2>Меню</h2>
      <nav>
        <ul className={styles.nav}>
          {links.map(({ href, text }, index) => (
            <CustomLink key={index} href={href}>
              {text}
            </CustomLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
