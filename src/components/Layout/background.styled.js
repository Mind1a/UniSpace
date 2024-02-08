import styled from "styled-components";

export const SBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .landing-page {
    width: min(100%, 1600px);
    height: 100%;
    margin: auto;
    background-image: url("/public/assets/images/star.svg"),
      url("/public/assets/images/start 1.svg"),
      url("/public/assets/images/Frame.svg");
    background-repeat: no-repeat;
    background-position: 0px 20%, right 10% top 40%, left 0px bottom 0;
  }
`;
