import React, { useRef } from "react";
import { Input } from "../Input";
import {
  SArrowButton,
  SDropdownButton,
  SDropdownItem,
  SDropdownList,
  SDropdownWrapper,
} from "./Dropdown.styled";
import { DropArrow } from "../../DropArrow";
import { dropdownVariants } from "./Dropdown.variants";
import { getLongestString } from "../../../utils/dropdown";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { AnimatePresence } from "framer-motion";
import { useController } from "react-hook-form";

export const Dropdown = (props) => {
  const { name, gridArea, items, control, isTextValue } = props;

  const {
    field: { value, onChange, onBlur },
  } = useController({ name, control });

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(dropdownRef, false, onBlur);

  const longestItem = items && getLongestString(Object.values(items));

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (val) => {
    toggleOpen();
    onChange(val)
  };

  const getValue = (value) => {
    if (isTextValue) return value;
    return items[+value];
  };

  return (
    <SDropdownWrapper gridArea={gridArea} ref={dropdownRef}>
      <Input
        {...props}
        value={getValue(value)}
        readOnly
        type={"text"}
        onClick={toggleOpen}
        RightComponent={
          <SArrowButton type="button" title="toggle dropdown">
            <DropArrow isOpen={isOpen} />
          </SArrowButton>
        }
      />
      <AnimatePresence>
        {isOpen && (
          <SDropdownList
            variants={dropdownVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {!items ? (
              <span>--- no items ---</span>
            ) : (
              Object.entries(items).map(([id, value]) => {
                return (
                  <SDropdownItem key={id}>
                    <SDropdownButton
                      type="button"
                      onClick={() => {
                        if (isTextValue) return handleSelect(value);
                        handleSelect(id);
                      }}
                      data-longestitem={longestItem}
                    >
                      {value}
                    </SDropdownButton>
                  </SDropdownItem>
                );
              })
            )}
          </SDropdownList>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
