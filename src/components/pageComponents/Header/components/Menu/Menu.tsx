import React from "react";
import { MdClose } from "react-icons/md";

import { Button, CustomLink, Logo, Modal } from "@/components";
import styles from "./Menu.module.scss";
import { links } from "@/utils";

interface MenuProps {
  active: boolean;
  visible: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <Modal {...props} className={styles.backdrop}>
      <div className={styles.menu}>
        <div className={styles.menuHeader}>
          <Logo />
          <button className={styles.cross}>
            <MdClose size={40} onClick={() => props.close()} />
          </button>
        </div>
        <div className={styles.content}>
          <nav>
            <ul className={styles.links}>
              {links.map(({ href, text }, index) => (
                <CustomLink key={index} href={href} className={styles.link}>
                  {text}
                </CustomLink>
              ))}
            </ul>
          </nav>
          <Button className={`${styles.button} ${styles.btn}`}>
            Записатися
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Menu;
