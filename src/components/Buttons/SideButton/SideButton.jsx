import React from "react";
import { SSideButton, SSvg } from "./SideButton.styled";

export const SideButton = ({
  type,
  secondary,
  width,
  height,
  gap,
  fontSize,
  fontWeight,
  hover,
  onClick,
  children,
  to,
  LeftComponent,
}) => {
  return (
    <SSideButton
      to={to}
      width={width}
      height={height}
      gap={gap}
      fontSize={fontSize}
      fontWeight={fontWeight}
      type={type}
      hover={hover}
      secondary={secondary}
      onClick={onClick}
    >
      <SSvg>{LeftComponent}</SSvg>
      {children}
    </SSideButton>
  );
};
