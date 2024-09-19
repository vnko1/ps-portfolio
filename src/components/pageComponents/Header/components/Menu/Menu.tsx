import React from "react";
import { Modal } from "@/components";
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
      Menu
    </Modal>
  );
};

export default Menu;
