import React from "react";
import { SArrows } from "./SortArrows.styled";
export const SortArrows = ({ sorting }) => {
  return (
    <SArrows>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={4}
        viewBox="0 0 10 5"
        fill="none"
        stroke={sorting === "asc" ? "#353535" : "#767777"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ overflow: "visible" }}
        className="feather feather-chevron-down"
      >
        <path d="M0 5 L5 0 L10 5" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={4}
        viewBox="0 0 10 5"
        fill="none"
        stroke={sorting === "desc" ? "#353535" : "#767777"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ overflow: "visible" }}
        className="feather feather-chevron-down"
      >
        <path d="M0 0 L5 5 L10 0" />
      </svg>
    </SArrows>
  );
};
