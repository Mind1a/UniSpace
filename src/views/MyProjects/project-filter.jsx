import { useState } from "react";
import { FilterIcon } from "./assets/filter-icon";
import { Modal } from "../../components/modal";
import { Menu } from "../../components/menu/menu";

export const ProjectFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsFilterOpen(true)}
        aria-label="Filter projects"
        title="Filter projects"
        aria-haspopup="menu"
        aria-expanded={isFilterOpen}
        className="local"
      >
        <FilterIcon />
      </button>

      {isFilterOpen && (
        <Modal
          onClose={() => setIsFilterOpen(false)}
          background="none"
          disableScroll={false}
        >
          <Menu>
            <button>hi</button>
          </Menu>
        </Modal>
      )}
    </>
  );
};
