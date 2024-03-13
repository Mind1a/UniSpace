import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./CourseSliderSettings";
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
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { InteractiveSlider } from "../InteractiveSlider";

export const CourseSlider = ({ data, buttonContent }) => {
  const navigate = useNavigate();

  return (
    <SCourseSlider>
      <InteractiveSlider settings={settings}>
        {data.map(({ id, course, src }) => (
          <SCourseCard key={id}>
            <SCourseInfo>
              <SCourseImgContainer>
                <SCourseImg src={src} alt={course} />
                <SVectorTopLeft>
                  <img src="assets/svg/course_card_dotted_line1.svg" />
                </SVectorTopLeft>
                <SVectorTopLeft left="1rem" top="1rem">
                  <img src="assets/svg/course_card_line1.svg" />
                </SVectorTopLeft>
                <SVectorBottomRight>
                  <img src="assets/svg/course_card_dotted_line2.svg" />
                </SVectorBottomRight>
                <SVectorBottomRight right="1rem" bottom="1rem">
                  <img src="assets/svg/course_card_line2.svg" />
                </SVectorBottomRight>
              </SCourseImgContainer>
              <SCourseFullname>
                <span>{course}</span>
              </SCourseFullname>
              <Button
                type="button"
                margin="2.2rem 0 0.5rem 0"
                border="1px solid #fff"
                borderHover="1px solid #315c8e"
                bgColor="transparent"
                borderRadius="0.375rem"
                onClick={() => navigate("/")}
              >
                {buttonContent}
              </Button>
            </SCourseInfo>
          </SCourseCard>
        ))}
      </InteractiveSlider>
    </SCourseSlider>
  );
};