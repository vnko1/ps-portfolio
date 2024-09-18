import React from "react";

import { ContentContainer } from "@/components";
import { Info, Menu, Schedule, Contacts } from "./components";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <ContentContainer
      wrapperTag="footer"
      wrapperClassName={styles.footer}
      contentClassName={styles.container}
    >
      <Info className={styles.info} />
      <Menu className={styles.menu} />
      <Schedule className={styles.schedule} />
      <Contacts className={styles.contacts} />
    </ContentContainer>
  );
};

export default Footer;
