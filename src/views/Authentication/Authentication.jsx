import React, { useState } from "react";
import { Input } from "../../components/Inputs/Input";
import { PasswordInput } from "../../components/Inputs/PasswordInput";
import { Checkbox } from "../../components/Inputs/Checkbox/Checkbox";
import { Button } from "../../components/Button";
import {
  SAuthenticationView,
  SDescription,
  SForgotPasswordLink,
  SForm,
  SInputWrapper,
  SRegistrationLink,
  SRegistrationText,
  SRememberWrapper,
  SError,
  STitle,
} from "./Authentication.styled";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticationSchema } from "../../schemas/authentication";
import Cookies from "js-cookie";

const url = "https://unispaceapi.onrender.com/api/authorization";

export const Authentication = () => {
  const {
    register,
    watch,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(authenticationSchema),
    mode: "all",
    delayError: 500,
  });

  const [serverErrors, setServerErrors] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const res = await axios.post(url, getValues(), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 200) return;
      const { access_token, refresh_token } = res.data;

      Cookies.set("access_token", access_token, { expires: 1 });
      Cookies.set("refresh_token", refresh_token, { expires: 30 });
      navigate("/");
    } catch (err) {
      if (!err.response.data) return console.log(err);

      console.log(err.response.data);
      setServerErrors(err.response.data);
    }
  };

  return (
    <SAuthenticationView>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <STitle>გამარჯობა</STitle>
        <SDescription>
          უნილაბის სამართავ პანელში მოსახვედრად, გთხოვთ გაიაროთ ავტორიზაცია
        </SDescription>
        <SInputWrapper>
          <Input
            id="email"
            type="email"
            name="email"
            label="ელ-ფოსტა"
            width="21.25rem"
            placeholder="info@unilab.ge"
            register={register}
            errors={errors}
          />
          <PasswordInput
            id="password"
            name="password"
            label="პაროლი"
            width={"21.25rem"}
            placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗"
            register={register}
            errors={errors}
          />
        </SInputWrapper>
        <SRememberWrapper>
          <Checkbox
            id="remember"
            name="remember"
            label="დამიმახსოვრე"
            register={register}
            watch={watch}
          />
          <SForgotPasswordLink to={"/recovery-password"}>
            დაგავიწყდა პაროლი?
          </SForgotPasswordLink>
        </SRememberWrapper>
        {serverErrors && <SError>{serverErrors}</SError>}
        <Button width="21.25rem">ავტორიზაცია</Button>
        <SRegistrationText>
          არ გაქვს ანგარიში?
          <SRegistrationLink to={"/registration"}>
            დარეგისტრირდი
          </SRegistrationLink>
        </SRegistrationText>
      </SForm>
    </SAuthenticationView>
  );
};
