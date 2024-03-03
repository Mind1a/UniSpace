import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../ContributorsSlider/sliderSettings";
import Slider from "react-slick";
import {
  SCourseCard,
  SCourseFullname,
  SCourseImg,
  SCourseImgContainer,
  SCourseInfo,
  SCourseSlider,
  SVectorBottomRight,
  SVectorTopLeft,
} from "./CourseSlider.styled"
import { CustomPrevArrow } from "../ContributorsSlider/CustomArrows/CustomArrows";
import { CustomNextArrow } from "../ContributorsSlider/CustomArrows/CustomArrows";

const options = {
  ...settings,
  prevArrow: <CustomPrevArrow right="7rem" />,
  nextArrow: <CustomNextArrow right="2rem" />
}


export const CourseSlider = ({ data }) => {

  return (
    <SCourseSlider>
      <Slider {...options}>
        {data.map(({ id, course, src }) => (
          <SCourseCard key={id}>
            <SCourseInfo>
              <SCourseImgContainer>
                <SCourseImg src={src} alt={course} />
                <SVectorTopLeft>
                  <img src="assets/svg/course_card_line1.svg" />
                </SVectorTopLeft>
                <SVectorBottomRight>
                  <img src="assets/svg/course_card_line2.svg" />
                </SVectorBottomRight>
              </SCourseImgContainer>
            </SCourseInfo>
            <SCourseFullname>
              <span>{course}</span>
            </SCourseFullname>
          </SCourseCard>
        ))}
      </Slider>
    </SCourseSlider>
  );
};