"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  active: boolean;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
  className?: string;
  transitionClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  active,
  visible,
  setVisible,
  close,
  className,
  transitionClassName = "",
}) => {
  const onHandleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    if (active) {
      setVisible(true);
      document.body.classList.add(styles.hidden);
    }
    return () => {
      document.body.classList.remove(styles.hidden);
    };
  }, [active, setVisible]);

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
  }, [close]);

  const baseClassNames = clsx(styles.backdrop, className, {
    [styles.active]: visible,
    [transitionClassName]: visible,
  });

  if (!active) return null;

  const modal = (
    <div className={baseClassNames} onClick={onHandleBackdropClick}>
      {children}
    </div>
  );

  return createPortal(modal, document.body);
};

export default Modal;
