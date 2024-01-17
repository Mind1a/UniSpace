import React from "react";
import { SIconPair, SUnilabLink } from "./IconPair.styled";

export const IconPair = ({ width, height, gap, margin }) => {
  return (
    <SIconPair width={width} height={height} gap={gap} margin={margin}>
      <SUnilabLink to="/">
        <img src="assets/images/unilab.webp" alt="unilab" />
      </SUnilabLink>
      <img src="assets/svg/iliaUniLogo.svg" alt="iliaUniLogo" />
    </SIconPair>
  );
};
