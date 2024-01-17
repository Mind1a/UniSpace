import styled from "styled-components";

export const SFooter = styled.footer`
  width: 100%;
  color: #ffffff;
`;

export const SFooterTopLines = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    max-width: 40%;
    width: 35.625rem;
    height: 1.25rem;
  }
`;

export const SFooterInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  height: 23.8rem;
  align-items: center;
  padding: 2.8rem;
`;

export const SIconPairWrapper = styled.div`
  width: 100%;
`;

export const SAboutProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 16rem;
  height: 100%;

  img {
    width: 10.625rem;
    height: 5rem;
  }
`;

export const SAboutProjectContainer = styled.a`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  color: #fff;
`;

export const SAboutProject = styled.div`
  text-align: center;
  width: 15.688rem;
  height: 4.438rem;
  padding: 1.625rem;
  background-image: linear-gradient(rgba(49, 45, 231, 1), rgba(49, 45, 231, 1)),
    linear-gradient(rgba(49, 45, 231, 1), rgba(49, 45, 231, 1)),
    linear-gradient(rgba(49, 45, 231, 1), rgba(49, 45, 231, 1)),
    linear-gradient(rgba(49, 45, 231, 1), rgba(49, 45, 231, 1));
  background-repeat: no-repeat;
  background-size: 0.125rem 100%, 70% 0.125rem, 0.125rem 100%, 70% 0.125rem,
    calc(100% - 0.5rem) calc(100% - 0.5rem);
  background-position: left top, left top, right bottom, right bottom, 1px 1px;

  a {
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const SSocialIcons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 2.3rem;
  a {
    img {
      border-radius: 50%;
      width: 2.75rem;
      height: 2.75rem;
    }
  }
`;
