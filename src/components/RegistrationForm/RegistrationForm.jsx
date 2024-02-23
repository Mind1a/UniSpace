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
    setServerErrors(null);

    // add default values to be able to register
    data.role_id = data?.role ?? 2;
    data.school = data?.school ?? null;
    data.grade = data?.grade ?? null;
    data.parent_name = data?.parent_name ?? null;
    data.parent_lastname = data.parent_lastname ?? null;
    data.parent_number = data?.parent_number ?? null;
    data.university_id = data?.university_id ?? 1;
    data.faculty =
      data?.faculty ?? "ზუსტ და საბუნებისმეტყველო მეცნიებათა ფაკულტეტი";
    data.program = data?.program ?? "მათემატიკა";
    data.semester = data?.semester ?? 6;
    data.degree_level = data?.degree_level ?? "ბაკალავრი";

    try {
      await axios.post(URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/authentication");
      // TODO: show success message
    } catch (error) {
      if (typeof error.response.data === "string") {
        setServerErrors(error.response.data);
        console.log(error.response.data);
      } else {
        let keys = Object.keys(error.response.data.message);
        setServerErrors(error.response.data.message[keys[0]]);
        console.log(error.response.data.message[keys[0]]);
      }
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
        {serverErrors && typeof serverErrors === "string" && (
          <SError>{serverErrors}</SError>
        )}

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
