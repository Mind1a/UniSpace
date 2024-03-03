import React from "react";
import { SLeftArrowButton, SRightArrowButton } from "./CustomArrows.styled";

export const CustomPrevArrow = (props) => {
  const { onClick, right } = props;

  return (
    <SLeftArrowButton
      onClick={onClick}
      right={right}
    >
      <img src="/assets/svg/leftArrow.svg" alt="" />
    </SLeftArrowButton>
  );
};

export const CustomNextArrow = (props) => {
  const { onClick, right } = props;

  return (
    <SRightArrowButton
      onClick={onClick}
      right={right}
    >
      <img src="/assets/svg/rightArrow.svg" alt="" />
    </SRightArrowButton>
  );
};