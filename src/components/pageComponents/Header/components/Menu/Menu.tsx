import React from "react";
import { MdClose } from "react-icons/md";

import { Logo, Modal } from "@/components";
import styles from "./Menu.module.scss";

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
          <ul className={styles.list}></ul>
        </div>
      </div>
    </Modal>
  );
};

export default Menu;
