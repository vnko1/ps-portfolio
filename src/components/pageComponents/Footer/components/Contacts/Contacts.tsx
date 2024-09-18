import React from "react";
import clsx from "clsx";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import { address, email, phones } from "@/utils/constants";
import styles from "./Contacts.module.scss";

interface ContactsProps {
  className?: string;
}

const soc = [
  { icon: FaFacebook, href: "/" },
  { icon: FaInstagram, href: "/" },
  { icon: FaYoutube, href: "/" },
];

const Contacts: React.FC<ContactsProps> = ({ className }) => {
  return (
    <div className={clsx(styles.contacts, className)}>
      <h2>Контакти</h2>
      <div className={styles.links}>
        <a
          href={address.href}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiLocationPin size={72} />
          <span>{address.text}</span>
        </a>
        <a
          href={email.href}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineMailOutline size={24} />
          <span>{email.text}</span>
        </a>
        <a
          href={phones.lifeCell.href}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdCall size={24} />
          <span>{phones.lifeCell.text}</span>
        </a>
        <div className={styles.icons}>
          {soc.map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              {<Icon size={14} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
