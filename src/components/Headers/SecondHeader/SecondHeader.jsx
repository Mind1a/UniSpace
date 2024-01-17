import React from "react";
import { IconPair } from "../../IconPair";
import { SSecondHeader } from "./SecondHeader.styled";

export const SecondHeader = () => {
  return (
    <SSecondHeader>
      <IconPair width="auto" height="5rem" gap="2.5rem" />
    </SSecondHeader>
  );
};
