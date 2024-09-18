import React from "react";
import clsx from "clsx";

import styles from "./ContentContainer.module.scss";

type WrapperTagType = "div" | "section" | "header" | "footer";

interface ContentContainerProps {
  children: React.ReactNode;
  wrapperTag?: WrapperTagType;

  wrapperClassName?: string;
  contentClassName?: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  wrapperTag: WrapperTag = "div",
  contentClassName,
  wrapperClassName,
}) => {
  return (
    <WrapperTag className={clsx(styles.wrapper, wrapperClassName)}>
      <div>
        <div className={clsx(styles.container, contentClassName)}>
          {children}
        </div>
      </div>
    </WrapperTag>
  );
};

export default ContentContainer;
