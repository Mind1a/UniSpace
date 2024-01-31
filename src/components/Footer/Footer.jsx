import React from "react";
import { IconPair } from "../IconPair";
import {
  SFooter,
  SFooterInfo,
  SIconPairWrapper,
  SAboutProjectDiv,
  SAboutProject,
  SSocialIcons,
  SAboutProjectContainer,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <SFooter>
      <SFooterInfo>
        <SIconPairWrapper>
          <IconPair width="auto" height="3.75rem" size="" gap="1.65rem" />
        </SIconPairWrapper>
        <SAboutProjectDiv>
          <SAboutProjectContainer href="#">
            <SAboutProject>პროექტის შესახებ</SAboutProject>
          </SAboutProjectContainer>
          <img src="/assets/images/unilabText.webp" alt="unilabText" />
        </SAboutProjectDiv>
        <SSocialIcons>
          <a href="#">
            <img src="/assets/svg/facebookLogo.svg" alt="facebookLogo" />
          </a>
          <a href="#">
            <img src="/assets/svg/youtubeLogo.svg" alt="youtubeLogo" />
          </a>
          <a href="#">
            <img src="/assets/svg/linkedinLogo.svg" alt="linkedinLogo" />
          </a>
        </SSocialIcons>
      </SFooterInfo>
    </SFooter>
  );
};
