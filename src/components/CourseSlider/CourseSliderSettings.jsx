import { CustomNextArrow, CustomPrevArrow } from "../ContributorsSlider/CustomArrows/CustomArrows";

export const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 700,
  prevArrow: <CustomPrevArrow right="7rem" />,
  nextArrow: <CustomNextArrow right="2rem" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]
};