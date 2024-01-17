import { Link } from "react-router-dom";
import styled from "styled-components";

export const SIconPair = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => (margin ? margin : "0")};

  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`;

export const SUnilabLink = styled(Link)``;
