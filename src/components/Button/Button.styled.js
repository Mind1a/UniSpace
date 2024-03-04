import styled from "styled-components";

export const SButton = styled.button`
  width: ${({ width }) => (width ? width : "100%")};
  margin: ${({ margin }) => (margin ? margin : "")};
  height: ${({ height }) => (height ? height : "")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.875rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  padding: 0.75rem;
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRaduis }) => (borderRaduis ? borderRaduis : "0.625rem")};
  background-color: ${({ secondary, bgColor }) => (secondary ? "#ffffff" : bgColor ? bgColor : "#4980c0")};
  color: ${({ secondary }) => (secondary ? "#000000" : "#ffffff")};
  cursor: pointer;
  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#f2f2f2" : "#315c8e")};
    border: ${({ borderHover }) => (borderHover ? borderHover : "none")};
  }
`;

export const SContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.741rem;
`;
