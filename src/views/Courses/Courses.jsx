import { CourseSlider } from "../../components/CourseSlider";
import { CoursesData } from "../../data";
import {
  SCoursesContainer,
  SCoursesH1
} from "./Courses.styled";


export const Courses = () => {

  return (
    <>
      <SCoursesContainer>
        <SCoursesH1>აქტიური კონკურსები</SCoursesH1>
        <CourseSlider data={CoursesData} buttonContent="რეგისტრაცია" />
      </SCoursesContainer>
      <SCoursesContainer>
        <SCoursesH1>მიმდინარე კურსები</SCoursesH1>
        <CourseSlider data={CoursesData} buttonContent="დეტალურად" />
      </SCoursesContainer>
    </>
  )
}