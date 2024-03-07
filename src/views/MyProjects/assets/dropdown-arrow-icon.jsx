export const DropdownArrowIcon = ({ isOpen }) => {
  return (
    <svg
      style={{
        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s",
      }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="#274D78"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
