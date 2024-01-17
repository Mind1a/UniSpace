import React from "react";
import { motion } from "framer-motion";

export const CircleCheck = ({ isChecked }) => {
  return (
    <svg
      width={6}
      height={6}
      viewBox="0 0 6 6"
      stroke="#ffffff"
      fill="transparent"
      strokeLinecap="round"
      strokeWidth={"1.5px"}
      style={{ overflow: "visible" }}
    >
      <motion.circle
        cx={3}
        cy={3}
        r={3}
        animate={isChecked ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
      />
    </svg>
  );
};
