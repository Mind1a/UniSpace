import React, { useState } from "react";
import { ProjectSlider } from "../../components/ProjectSlider";
import { Button } from "../../components/Button";
import { motion } from "framer-motion";

import {
  SDescription,
  SMainContent,
  SMainDiv,
  STitle,
} from "./MainPage.styled";
import { ProjectData } from "../../data";
import { Link } from "react-router-dom";
import { descriptionVariants, titleVariants } from "./MainPage.variants";

const MotionLink = motion(Link);

export const MainPage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSliderChange = (i) => {
    setSliderIndex(i);
  };

  const { title, description } = ProjectData[sliderIndex];
  return (
    <SMainDiv>
      <ProjectSlider onChange={handleSliderChange} data={ProjectData} />
      <SMainContent initial="hidden" animate="visible">
        <STitle key={"title" + sliderIndex} variants={titleVariants}>
          {title}
        </STitle>
        <SDescription
          key={"description" + sliderIndex}
          variants={descriptionVariants}
        >
          {description}
        </SDescription>
        <MotionLink to="#" layout>
          <Button width="21.25rem">ვრცლად პროექტის შესახებ</Button>
        </MotionLink>
      </SMainContent>
    </SMainDiv>
  );
};
