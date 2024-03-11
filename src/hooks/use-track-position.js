"use client";
import { useState, useLayoutEffect } from "react";

export const useTrackPosition = ({ ref, trackScroll = false }) => {
  if (!ref) return;
  const [boundaries, setBoundaries] = useState(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (ref?.current) {
        setBoundaries(ref.current.getBoundingClientRect());
      }
    };

    window.addEventListener("resize", handleResize);
    if (trackScroll) {
      window.addEventListener("scroll", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (trackScroll) {
        window.removeEventListener("scroll", handleResize);
      }
    };
  }, []);

  useLayoutEffect(() => {
    setBoundaries(ref.current?.getBoundingClientRect());
  }, []);

  return boundaries;
};
