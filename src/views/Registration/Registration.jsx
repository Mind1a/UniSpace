import React from "react";
import { RegistrationForm } from "../../components/RegistrationForm";
import {
  SRegistrationMainDiv,
  SRegistrationSvgs,
  SStarLeftTop,
  SStarLeftBottom,
  SVectorRight,
} from "./Registration.styled";
import { RegistrationProvider } from "../../context/RegistrationContext";

export const Registration = () => {
  return (
    <SRegistrationMainDiv>
      <RegistrationProvider>
        <RegistrationForm />
      </RegistrationProvider>
    </SRegistrationMainDiv>
  );
};
