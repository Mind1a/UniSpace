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
`;

export const SCourseInfo = styled.div`
  > span {
    margin-top: 4.938rem;
  }
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const SCourseImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1.406rem 0;
  width: 100%;
  overflow: hidden;
`;

export const SCourseImg = styled.img`
  height: 10rem;
  margin: 3rem 2rem;
  pointer-events: none;
`;

export const SVectorTopLeft = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : 0)};
  left: ${({ left }) => (left ? left : "0rem")};
`;

export const SVectorBottomRight = styled.div`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : 0)};;
  right: ${({ right }) => (right ? right : "0rem")};
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
