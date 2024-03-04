import styled from "styled-components";

export const SCourseSlider = styled.div`
  margin: 8.938rem auto;

  width: 100%;
  > span {
    font-size: 1.125rem;
    color: #ffffff;
  }
`;

export const SCourseCard = styled.div`
  position: relative;
  display: flex;
  text-align: center;
`;

export const SCourseInfo = styled.div`
  > span {
    margin-top: 4.938rem;
  }
  display: flex;
  justify-content: center;
  position: relative;
`;

export const SCourseImg = styled.img`
  min-width: 10rem;
  height: 10rem;
  margin: 3rem 2rem;
  pointer-events: none;
`;

export const SCourseImgContainer = styled.div`
  position: relative;
  padding: 1.406rem 0;
`;

export const SVectorTopLeft = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : 0)};
  left: ${({ left }) => (left ? left : "-2rem")};
`;

export const SVectorBottomRight = styled.div`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : 0)};;
  right: ${({ right }) => (right ? right : "-2rem")};
`;
export const SCourseFullname = styled.div`
  margin-top: 3rem;
  > span {
    font-family: 'Noto Sans Georgian';
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 30px;
    color: #3669A2;
  }
`;
