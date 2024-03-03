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
import { Button } from "../Button";

const options = {
  ...settings,
  prevArrow: <CustomPrevArrow right="7rem" />,
  nextArrow: <CustomNextArrow right="2rem" />
}

export const CourseSlider = ({ data, buttonContent }) => {

  return (
    <SCourseSlider>
      <Slider {...options}>
        {data.map(({ id, course, src }) => (
          <SCourseCard key={id}>
            <SCourseInfo>
              <SCourseImgContainer>
                <SCourseImg src={src} alt={course} />
                <SVectorTopLeft>
                  <img src="assets/svg/course_card_dotted_line1.svg" />
                </SVectorTopLeft>
                <SVectorTopLeft left="-1rem" top="1rem">
                  <img src="assets/svg/course_card_line1.svg" />
                </SVectorTopLeft>
                <SVectorBottomRight>
                  <img src="assets/svg/course_card_dotted_line2.svg" />
                </SVectorBottomRight>
                <SVectorBottomRight right="-1rem" bottom="1rem">
                  <img src="assets/svg/course_card_line2.svg" />
                </SVectorBottomRight>
              </SCourseImgContainer>
            </SCourseInfo>
            <SCourseFullname>
              <span>{course}</span>
            </SCourseFullname>
            <Button
              type="button"
              width="70%"
              margin="2.2rem 0 0 0"
              border="1px solid #fff"
              borderHover="1px solid #315c8e"
              bgColor="transparent"
              borderRadius="0.375rem"
            >
              {buttonContent}
            </Button>
          </SCourseCard>
        ))}
      </Slider>
    </SCourseSlider>
  );
};