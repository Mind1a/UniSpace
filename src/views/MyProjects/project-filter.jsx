import { useState } from "react";
import { FilterIcon } from "./assets/filter-icon";
import { Modal } from "../../components/modal";
import { Menu } from "../../components/menu";
import { useRef } from "react";
import {
  SFilters,
  SCategory,
  SInputContainer,
  SCheckbox,
  SFilterButton,
} from "./my-projects.styled";
import { AnimatePresence } from "framer-motion";
import { DropdownArrowIcon } from "./assets/dropdown-arrow-icon";

export const ProjectFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    final: true,
    practical: true,
    python: false,
    frontend: false,
    react: false,
  });
  const buttonRef = useRef(null);

  return (
    <>
      <SFilterButton
        ref={buttonRef}
        onClick={() => setIsFilterOpen(true)}
        aria-label="Filter projects"
        title="Filter projects"
        aria-haspopup="menu"
        aria-expanded={isFilterOpen}
        className="local"
      >
        <FilterIcon />
      </SFilterButton>

      <AnimatePresence>
        {isFilterOpen && (
          <Modal
            onClose={() => setIsFilterOpen(false)}
            background="none"
            disableScroll={false}
          >
            <Menu parentRef={buttonRef}>
              <SFilters>
                <h2>
                  <FilterIcon /> პროექტების გაფილტვრა
                </h2>
                <Category name="პროექტის ტიპი">
                  <Checkbox
                    id="final"
                    checked={filters.final}
                    onChange={(e) => {
                      setFilters({ ...filters, final: e.target.checked });
                    }}
                    label="ფინალური"
                  />
                  <Checkbox
                    id="practical"
                    checked={filters.practical}
                    onChange={(e) => {
                      setFilters({ ...filters, practical: e.target.checked });
                    }}
                    label="პრაქტიკული"
                  />
                </Category>

                <Category name="პროექტის სახელი">
                  <Checkbox
                    id="python"
                    label="Python"
                    checked={filters.python}
                    onChange={(e) => {
                      setFilters({ ...filters, python: e.target.checked });
                    }}
                  />

                  <Checkbox
                    id="frontend"
                    label="Frontend"
                    checked={filters.frontend}
                    onChange={(e) => {
                      setFilters({ ...filters, frontend: !filters.frontend });
                    }}
                  />

                  <Checkbox
                    id="react"
                    label="React"
                    checked={filters.react}
                    onChange={(e) => {
                      setFilters({ ...filters, react: !filters.react });
                    }}
                  />
                </Category>

                <Category name="დამატების თარიღი"></Category>
              </SFilters>
            </Menu>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

const Category = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SCategory>
      <button onClick={() => setIsOpen(!isOpen)}>
        <DropdownArrowIcon isOpen={isOpen} /> {name}
      </button>
      {isOpen && <SInputContainer>{children}</SInputContainer>}
    </SCategory>
  );
};

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <SCheckbox>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          aria-checked={checked}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </SCheckbox>
  );
};
