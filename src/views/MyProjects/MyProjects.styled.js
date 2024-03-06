import styled from "styled-components";

export const SMyProjects = styled.div`
  font-family: "Noto Sans Georgian";
  color: #fff;
  h2 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 2rem 0;
  }

  .filters {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.4rem;

    button {
      border-radius: 0.3rem;
      border: none;
      width: 2.5rem;
      height: 2.5rem;
      display: grid;
      place-items: center;
      cursor: pointer;

      svg {
        width: 1.4rem;
        height: 1.4rem;
      }
    }

    .local {
      background-color: #4980c0;
    }
  }
`;

export const SMyProject = styled.div`
  padding: 4rem 0;

  &:not(:last-of-type) {
    border-bottom: 2px solid transparent;
    border-image: url("/src/views/MyProjects/assets/border-line.svg") 2;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;

    .name {
      font-size: 1.125rem;
      font-weight: 700;
    }

    .type {
      font-size: 0.875rem;
      font-weight: 700;
      background-color: #fff;
      border-radius: 0.2rem;
      color: #000;
      padding: 0.595rem 2rem;
      color: #3f48cc;
    }

    .final {
      background-color: #3f48cc;
      color: #fff;
    }
  }

  .grid {
    display: grid;
    gap: 3rem;

    @media (min-width: 768px) {
      grid-template-columns: auto 1fr;
    }

    .details {
      display: flex;
      flex-direction: column;
      letter-spacing: 0.5px;
      line-height: 1.5;

      .lecturer {
        strong {
          font-weight: 700;
        }
      }

      .description {
        margin-top: 2rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
      }

      .actions {
        margin-top: auto;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;

        a {
          margin-top: 2rem;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 1rem;

          &:hover {
            color: #ccc;
            svg {
              fill: #ccc;
            }
          }
        }
      }
    }
  }
`;

export const SProjectImage = styled.div`
  position: relative;
  height: 260px;
  aspect-ratio: 3/4;
  display: grid;
  place-items: center;
  border: 20px solid transparent;
  border-image: url("/src/views/MyProjects/assets/frame.svg") 20;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;
