import React from "react";
import { SHeader } from "./Header.styled";
import { IconPair } from "../../IconPair";

export const Header = () => {
  return (
    <SHeader>
      <IconPair width="auto" height="6.25rem" gap="2.875rem" />
    </SHeader>
  );
};
