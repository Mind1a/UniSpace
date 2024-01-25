import styled from "styled-components";

export const SPage = styled.main`
  h1 {
    font-size: 30px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin: 2em 0 1.5em;
  }
`;

export const SQuestions = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;

  h2 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 1.2em;
    color: #444444;
  }
`;

export const SQuestion = styled.div`
  margin-bottom: 3rem;
`;

export const SQuestionInput = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  input[type="checkbox"] {
    all: unset;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.2rem;
    border: 1px solid #000000;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    position: relative;

    &:hover {
      background-color: #f2f2f2;
    }

    &:focus-visible {
      outline: 2px solid #1a5daa;
    }

    &:checked {
      background-color: #2984ce;
      border-color: #2984ce;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 2px 2px 0;
        border-color: #fff;
        transform: translate(-50%, -50%) rotate(45deg);
        height: 10px;
        width: 5px;
      }
    }
  }

  fieldset {
    border-radius: 0.4rem;
    border: 1px solid #000000;
    width: 100%;

    legend {
      margin-left: 2rem;
      font-size: 18px;
      font-weight: 700;
      background-color: #fff;
      padding: 0 0.8rem;
    }

    input {
      all: unset;
      box-sizing: border-box;
      font-size: 16px;
      padding: ${(props) => props.padding || `0.6em 1.5em 1.5em 1.5em`};
      min-width: 0;
      width: 100%;
    }
  }
`;

export const SAnswers = styled.div`
  margin-left: 6.5rem;

  h3 {
    color: #3f3f3f;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .answer {
    margin-bottom: 1rem;
  }

  .actions {
    margin-left: 6.5rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const SButton = styled.button`
  all: unset;
  margin-inline: ${(props) => props.marginInline || `unset`};
  padding: ${(props) => props.padding || `0.5rem 1rem`};
  background-color: ${(props) => props.background || ` #2984ce`};
  color: #fff;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: ${(props) => props.borderRadius || `0.4rem`};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.background || `#1e70c1`};
  }

  &:active {
    background-color: ${(props) => props.background || `#1a5daa`};
  }

  &:focus-visible {
    outline: 2px solid #1a5daa;
    outline-offset: ${(props) => (props.offset ? `2px` : `0`)};
    background-color: ${(props) => props.background || `#1a5daa`};
  }

  svg {
    transition: transform 0.1s ease-in-out;
    transform: ${(props) =>
      props.expanded ? `rotate(180deg)` : `rotate(0deg)`};
    width: ${(props) => props.width || `1rem`};
    height: ${(props) => props.height || `1rem`};
  }
`;
