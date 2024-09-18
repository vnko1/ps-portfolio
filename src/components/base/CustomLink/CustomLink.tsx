import React, { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";

import styles from "./CustomLink.module.scss";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
const CustomLink: React.FC<CustomLinkProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link className={clsx(styles.link, className)} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
