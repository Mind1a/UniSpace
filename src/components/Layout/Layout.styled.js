import styled from "styled-components";

export const SContainer = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow-x: hidden;
`;

export const SHeader = styled.div`
  .header {
    width: min(100%, 1200px);
    margin-inline: auto;

    > header {
      padding-inline: 1rem;
    }
  }

  .line {
    border-bottom: 2px solid #fff;
  }
`;

export const SMain = styled.div`
  width: min(100%, 1200px);
  margin-inline: auto;

  > main {
    padding: 1rem;
  }
`;

export const SSideBar = styled.div``;

export const SFooter = styled.div`
  .footer {
    max-width: 1200px;
    margin-inline: auto;
  }
`;

export const SFooterLines = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(5rem, 20vw, 30rem);

  div {
    display: flex;
    align-items: center;

    .line {
      width: 100%;
      height: 0.2rem;
      background-color: #fff;
    }

    .circle {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100vmax;
      border: 4px solid #fff;
    }
  }
`;
