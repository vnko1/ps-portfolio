import React from "react";
import clsx from "clsx";
import { FaViber, FaTelegram, FaSkype } from "react-icons/fa";

import styles from "./Schedule.module.scss";

interface ScheduleProps {
  className?: string;
}

const contacts = [
  { icon: FaViber, href: "/" },
  { icon: FaTelegram, href: "/" },
  { icon: FaSkype, href: "/" },
];

const Schedule: React.FC<ScheduleProps> = ({ className }) => {
  return (
    <div className={clsx(styles.schedule, className)}>
      <h2>Час роботи</h2>
      <div className={styles.text}>
        <p>Пн-Пт: 10:00–20:00,</p>
        <p>Сб-Нд: вихідні</p>
        <div className={styles.icons}>
          {contacts.map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {<Icon size={14} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
