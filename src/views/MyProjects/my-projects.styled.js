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
  }
`;

export const SMyProject = styled.div`
  padding: 4rem 0;

  &:not(:last-of-type) {
    border-bottom: 2px dashed transparent;
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

export const SFilterButton = styled.button`
  border-radius: 0.3rem;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: #4980c0;

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const SFilters = styled.div`
  color: #565656;

  h2 {
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #f2f2f2;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: #565656;
    }
  }
`;

export const SCategory = styled.div`
  button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #565656;
    cursor: pointer;
    border-radius: 0.4rem;
  }
`;

export const SInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.8rem;
  color: #353535;
`;

export const SCheckbox = styled.div`
  label {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.875rem;
    width: fit-content;
    border-radius: 0.4rem;
    padding: 0.5rem;
    cursor: pointer;

    &:has(:focus) {
      outline: 2px solid #353535;
    }

    input[type="checkbox"] {
      outline: none;
    }
  }
`;
