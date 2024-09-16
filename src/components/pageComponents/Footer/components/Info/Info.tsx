import React from "react";
import clsx from "clsx";

import { Button, CustomLink, Logo } from "@/components";
import styles from "./Info.module.scss";

interface InfoProps {
  className?: string;
}
const Info: React.FC<InfoProps> = ({ className }) => {
  return (
    <div className={clsx(styles.info, className)}>
      <Logo />
      <p className={styles.legal}>
        <span>
          Персональний сайт практикуючого психолога і психотерапевта Катерини
          Дробязко
        </span>
        <br />
        <span>&copy; 2024 Всі права захищені</span>
      </p>
      <Button className={styles.button}>Записатися</Button>
      <CustomLink href="/polityka-konfidencijnosti" className={styles.link}>
        Політика конфіденційності
      </CustomLink>
      <CustomLink href="/mapa-sajtu" className={styles.link}>
        Мапа сайту
      </CustomLink>
    </div>
  );
};

export default Info;
