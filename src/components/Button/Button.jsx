import React from "react";
import { SButton, SContentWrapper } from "./Button.styled";

export const Button = ({
  type,
  secondary,
  width,
  height,
  margin,
  fontSize,
  fontWeight,
  border,
  borderHover,
  bgColor,
  borderRadius,
  LeftComponent,
  RightComponent,
  children,
  onClick,
}) => {
  return (
    <SButton
      width={width}
      height={height}
      margin={margin}
      fontSize={fontSize}
      fontWeight={fontWeight}
      type={type}
      secondary={secondary}
      border={border}
      borderHover={borderHover}
      borderRadius={borderRadius}
      bgColor={bgColor}
      onClick={onClick}
    >
      <SContentWrapper>
        {LeftComponent}
        {children}
        {RightComponent}
      </SContentWrapper>
    </SButton>
  );
};
