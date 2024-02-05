import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SProjectDiv } from "./ProjectSlider.Styled";

export const ProjectSlider = ({ onChange, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    beforeChange: (_oldIndex, newIndex) => {
      onChange(newIndex);
    },
  };
  return (
    <SProjectDiv>
      <Slider {...settings}>
        {data.map(({ id, src }) => (
          <img key={id} src={src} alt={"banner" + id} />
        ))}
      </Slider>
    </SProjectDiv>
  );
};
