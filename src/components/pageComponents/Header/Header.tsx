"use client";
import React from "react";
import clsx from "clsx";

import { ContentContainer, Logo } from "@/components";
import { Menu, MenuBtn } from "./components";
import styles from "./Header.module.scss";
import { useModal } from "@/hooks";

const Header: React.FC = () => {
  const { setActive, ...rest } = useModal();
  return (
    <ContentContainer
      wrapperClassName={clsx(styles.header)}
      contentClassName={styles.container}
      wrapperTag="header"
    >
      <Logo />
      <MenuBtn onClick={() => setActive(true)} className={styles.menuBtn} />
      <Menu setActive={setActive} {...rest} />
    </ContentContainer>
  );
};

export default Header;
