import { createPortal } from "react-dom";

import { SModal } from "./modal.styled";
import { useRef, useEffect } from "react";

export const Modal = ({
  children,
  onClose,
  background = "rgba(0, 0, 0, 0.25)",
  disableScroll = true,
}) => {
  const modalRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = Array.from(
      modal.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
      ),
    );

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];
    previouslyFocusedElementRef.current = document.activeElement;

    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    modal.addEventListener("keydown", handleKeyDown);

    const handleScroll = (e) => {
      if (disableScroll) {
        e.preventDefault();
      }
    };

    if (disableScroll) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      modal.removeEventListener("keydown", handleKeyDown);
      if (disableScroll) {
        window.removeEventListener("scroll", handleScroll);
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
      previouslyFocusedElementRef.current?.focus();
    };
  }, [onClose]);

  return createPortal(
    <SModal
      style={{ backgroundColor: background }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      ref={modalRef}
    >
      {children}
    </SModal>,
    document.body,
  );
};
