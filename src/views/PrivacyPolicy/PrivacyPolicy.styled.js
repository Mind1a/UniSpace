import { Link } from "react-router-dom";
import styled from "styled-components";

export const SPrivacyPolicyView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: #ffffff;
`;
export const SPrivacyPolicy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18rem;
`;

export const STitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 4.688rem 0rem 6.625rem;
`;

export const SPreRegistrationSection = styled.section`
  h4 {
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 2.125rem;
  }
  ul {
    margin-bottom: 5.5rem;
    li {
      margin: 0rem 5rem;
      max-width: 80rem;
      font-size: 1rem;
      weight: 400;
      margin-bottom: 1.875rem;
    }
  }
`;
