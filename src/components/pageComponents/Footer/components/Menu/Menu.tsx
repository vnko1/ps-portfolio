import React from "react";
import clsx from "clsx";
import styles from "./Menu.module.scss";
import { CustomLink } from "@/components/base";

interface MenuProps {
  className?: string;
}

const links = [
  { href: "/pro-sebe", text: "Про мене" },
  { href: "/poslugy", text: "Послуги" },
  { href: "/vartist-poslug", text: "Ціни" },
  { href: "/osvita", text: "Дипломи" },
  { href: "/video", text: "Відеоблог" },
  { href: "/blog", text: "Блог" },
  { href: "/vidguky", text: "Відгуки" },
  { href: "/kontakty", text: "Контакти" },
];
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
