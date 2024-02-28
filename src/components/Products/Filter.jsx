import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Button,
  Checkbox,
} from "@chakra-ui/react";

import Product from "../../data/ProductData";
import { useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";

const Filter = ({ isOpen, onClose ,filters, setFilters, filterProducts}) => {
  const handleCheckboxChange = (color) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [color]: !prevFilters[color],
    }));
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack fontSize="16px" fontWeight="600" gap="2.5rem">
              {["black", "brown", "gray"].map((type) => (
                <Checkbox
                  key={type}
                  borderRadius="6px"
                  onChange={() => handleCheckboxChange(type)}
                  isChecked={filters[type]}
                >
                  {type}
                </Checkbox>
              ))}

              <Button onClick={filterProducts}>Apply Filters</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Filter;
