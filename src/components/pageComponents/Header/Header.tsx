import React from "react";
import clsx from "clsx";

import { ContentContainer, Logo, Modal } from "@/components";
import { MenuBtn } from "./components";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <ContentContainer
      wrapperClassName={clsx(styles.header)}
      contentClassName={styles.container}
      wrapperTag="header"
    >
      <Logo />
      <MenuBtn className={styles.menuBtn} />
    </ContentContainer>
  );
};

export default Header;
