import React, { useState } from "react";
import axios from "axios";
import { Checkbox } from "../../components/Inputs/Checkbox/Checkbox";
import { Button } from "../../components/Button";
import { MainInputGroup } from "../../components/RegistrationInputGroups/MainInputGroup";
import { SchoolInputGroup } from "../../components/RegistrationInputGroups/SchoolInputGroup";
import { UniversityInputGroup } from "../../components/RegistrationInputGroups/UniversityInputGroup";
import { useFormContext } from "react-hook-form";
import {
  SAuthenticationLink,
  SAuthenticationText,
  SDescription,
  STitle,
  SCenterDiv,
  SPrivacyCheckbox,
  SPrivacyLink,
  SPrivacyCheckboxImg,
  SError,
} from "./RegistrationForm.styled";
import { useNavigate } from "react-router-dom";

const URL = `https://unispaceapi.onrender.com/api/registration`;

export const RegistrationForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const [serverErrors, setServerErrors] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(URL, {
        headers: {
          "Content-Type": "application/json",
        },

        data,
      });
      console.log(res);
      navigate("/authentication");
    } catch (error) {
      setServerErrors(error.response.data.message);
      console.log(serverErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <STitle>გამარჯობა</STitle>
      <SDescription>
        უნილაბის სამართავ პანელში მოსახვედრად, გთხოვთ გაიაროთ ავტორიზაცია
      </SDescription>

      <MainInputGroup />
      <SchoolInputGroup />
      <UniversityInputGroup />

      <SCenterDiv>
        <SPrivacyCheckbox>
          <Checkbox
            name="terms"
            label="ვეთანხმები მოხმარების წესებსა და კონფიდენციალურობის პოლიტიკას"
            register={register}
            watch={watch}
          />
          <SPrivacyLink target={"_blank"} to="/privacy-policy">
            <SPrivacyCheckboxImg
              src="assets/svg/externalLink.svg"
              alt="externalLink"
            />
          </SPrivacyLink>
        </SPrivacyCheckbox>
        {errors?.terms && <SError>{errors.terms?.message}</SError>}
        {serverErrors && <SError>{serverErrors}</SError>}
        <Button width="21.25rem" margin="0 0 2.5rem 0" type="submit">
          რეგისტრაცია
        </Button>
        <SAuthenticationText>
          უკვე გაქვს ანგარიში?
          <SAuthenticationLink to="/authentication">
            გაიარე ავტორიზაცია
          </SAuthenticationLink>
        </SAuthenticationText>
      </SCenterDiv>
    </form>
  );
};
