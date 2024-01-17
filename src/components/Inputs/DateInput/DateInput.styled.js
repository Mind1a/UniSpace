import styled from "styled-components";
import { motion } from "framer-motion";

export const SDateInputWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const SDatePickerWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 100%;
  right: 0;
  margin-top: 0.375rem;
  z-index: 1;
`;

export const SCalendarIconContainer = styled.div`
  display: flex;
  padding-right: 0.6875rem;
  border-right: solid 0.5px #dadada;
  height: 1.875rem;
  align-items: center;
`;
export const SCalendarIcon = styled.img`
  height: 1.4rem;
  width: 1.4rem;
`;
