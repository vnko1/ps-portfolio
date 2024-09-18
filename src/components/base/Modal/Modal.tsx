"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  timeout?: number;
  backdropClassName?: string;
  menuClassName?: string;
  transitionClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  active,
  setActive,
  timeout = 300,
  backdropClassName,
  menuClassName,
  transitionClassName = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const close = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, timeout);
  };

  const onHandleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    if (active)
      setTimeout(() => {
        setIsVisible(true);
      }, timeout);
  }, [active, timeout]);

  useEffect(() => {
    const handlePressESC = (e: { code: string }) => {
      if (e.code === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handlePressESC);

    return () => {
      window.removeEventListener("keydown", handlePressESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseClassNames = clsx(
    styles.backdrop,
    {
      [styles.active]: isVisible,
      [transitionClassName]: isVisible,
    },
    backdropClassName
  );

  const modal = (
    <div className={baseClassNames} onClick={onHandleBackdropClick}>
      <div className={clsx(styles.menu, menuClassName)}>{children}</div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default Modal;
