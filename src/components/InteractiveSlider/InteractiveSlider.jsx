import { useRef, useState } from "react"
import { useDebounceResize } from "../../hooks/useDebounceResize";
import Slider from "react-slick"

export const InteractiveSlider = ({
  children,
  settings
}) => {
  const width = useDebounceResize(200);
  const sliderRef = useRef(null);

  const handleChange = (queryElement, visibility) => {
    if (sliderRef.current) {
      const slides = sliderRef.current.innerSlider.list.querySelectorAll(queryElement);

      slides.forEach((item) => {
        item.style.visibility = visibility
      })
    }
  }

  const handleAfterChange = () => {
    handleChange('[aria-hidden="true"]', 'hidden')
  }

  const handleBeforeChange = () => {
    handleChange('.slick-slide', 'visible')
  }

  const options = {
    ...settings,
    afterChange: () => handleAfterChange(),
    beforeChange: () => handleBeforeChange(),
    onInit: () => handleAfterChange(),
    swipeEvent: () => handleBeforeChange(),
  };

  const { responsive = [] } = settings || {};

  const sortedResponsive = [...responsive].sort((a, b) => b.breakpoint - a.breakpoint);
  const firstBreakpoint = sortedResponsive[0]?.breakpoint;

  return (
    <>
      {(!settings || !responsive.length) || width >= firstBreakpoint ?
        <Slider ref={sliderRef} {...options}>
          {children}
        </Slider> : null
      }
      {sortedResponsive.map(({ settings, breakpoint }, index) => {
        const { ...props } = settings || {};
        const nextBreakpoint = sortedResponsive[index + 1]?.breakpoint || 0;

        return (width < breakpoint && width >= nextBreakpoint) ?
          <Slider
            key={index}
            ref={sliderRef}
            {...{ ...options, ...props }}
          >
            {children}
          </Slider> : null
      })}
    </>
  )
}