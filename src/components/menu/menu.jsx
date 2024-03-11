import { useTrackPosition } from "../../hooks/use-track-position";
import { SMenu } from "./menu.styled";

export const Menu = ({ parentRef, children }) => {
  const boundaries = useTrackPosition({ ref: parentRef, trackScroll: true });

  const styles = {
    position: "fixed",
    top: boundaries?.bottom + 10,
    left: boundaries?.left,
    transform: `translateX(calc(-${100}% + ${boundaries?.width}px))`,
  };

  return (
    <SMenu
      role="menu"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      style={boundaries && styles}
    >
      {children}
    </SMenu>
  );
};
