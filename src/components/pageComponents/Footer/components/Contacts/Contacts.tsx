import React from "react";
import clsx from "clsx";
import { TfiLocationPin } from "react-icons/tfi";

import styles from "./Contacts.module.scss";

interface ContactsProps {
  className?: string;
}

const Contacts: React.FC<ContactsProps> = ({ className }) => {
  return (
    <div className={clsx(styles.contacts, className)}>
      <h2>Контакти</h2>
      <div className={styles.links}>
        <a
          href=""
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiLocationPin size={72} fill="text-accent" />
          <span className="flex-grow-0">
            04212, м. Київ, вул. Левка Лук'яненка, 21 мікрорайон Оболонь станція
            метро Мінська
          </span>
        </a>
        <div className={styles.icons}></div>
      </div>
    </div>
  );
};

export default Contacts;
