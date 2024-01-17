import React from "react";
import { SButton } from "./Eye.styled";
import { motion } from "framer-motion";
import { pathVariants } from "./Eye.variants";

export const Eye = ({ isPasswordVisible, onClick }) => {
  return (
    <SButton
      title="toggle password visibility"
      type="button"
      onClick={onClick}
      initial={"hidden"}
      animate={isPasswordVisible ? "visible" : "hidden"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#242424"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-eye"
      >
        <mask id="myMask">
          <rect x="0" y="0" width="24" height="24" fill="white" stroke="none" />

          <motion.path
            d="M 0 0 L 24 24"
            stroke="black"
            variants={pathVariants}
          />
        </mask>
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          mask="url(#myMask)"
        />
        <circle cx={12} cy={12} r={3} mask="url(#myMask)" />
        <motion.path d="M 2 4 L 20 22" stroke="#242424" variants={pathVariants} />
      </svg>
    </SButton>
  );
};
