import React from "react";
import { motion } from "framer-motion";

export const DropArrow = ({ isOpen, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={5}
      viewBox="0 0 10 5"
      fill="none"
      stroke={stroke ? stroke : "#434343"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
      className="feather feather-chevron-down"
    >
      <motion.path
        animate={isOpen ? { d: "M0 5 L5 0 L10 5" } : { d: "M0 0 L5 5 L10 0" }}
        transition={{ type: "spring", duration: 0.4 }}
      />
    </svg>
  );
};
