import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Filter from "./Filter";
import ProductData from "../../data/ProductData";

const 

Products = ({}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [filters, setFilters] = useState({
    black: false,
    brown: false,
    gray: false,
  });
  console.log(filters);

 
  const filterProducts = () => {

    onClose();
    // Implement your filtering logic based on the state of 'filters'
    // Update the 'products' state with the filtered data
  
    const selectedColors = Object.keys(filters).filter((color) => filters[color]);
  
    if (selectedColors.length === 0) {
      // No checkboxes are selected, show complete data
      setcategoryData(categoryData);
    } else {
      // Some checkboxes are selected, filter based on selected colors
      const filterCheck = categoryData.filter((product) =>
        selectedColors.includes(product.color.toLowerCase())
      );
      // console.log(filterCheck);
      setcategoryData(filterCheck);
    }
  };

  const [categoryData, setcategoryData] = useState(ProductData);
  const [selectedBtn, setSelectedBtn] = useState("All");
  const filterCategory = (type) => {
    if (type == "All") {
      setcategoryData(ProductData);
      setSelectedBtn("All");
      return;
    }
    const filterCategory = ProductData?.filter((product) =>
      product.category.toLowerCase().includes(type.toLowerCase())
    );
    setcategoryData(filterCategory);
    setSelectedBtn(type);
    setCurrentPage(1);
  };

  //  PAgination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categoryData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(categoryData.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Filter
        isOpen={isOpen}
        onClose={onClose}
        filters={filters}
        setFilters={setFilters}
        filterProducts={filterProducts}
      />
      <Container maxW="container.xl">
        <Button
          variant="outline"
          transform="translateY(-50%) rotate(-90deg)"
          pos="absolute"
          left="0"
          fontSize="1.5rem"
          onClick={onOpen}
          _hover={{ color: "#1FAB89" }}
        >
          Filter
        </Button>
        <Box display="flex" justifyContent="flex-end" mb="5">
          <Menu>
            <MenuButton
              variant="outline"
              fontSize="1.5rem"
              _hover={{ color: "#1FAB89" }}
              as={Button}
              rightIcon={<IoIosArrowDown />}
            >
              <Text textAlign="center">
                Category{" "}
                <span style={{ fontSize: "10px" }}>({selectedBtn})</span>
              </Text>
            </MenuButton>
            <MenuList>
              {["All", "Hoodies", "Mobile Cover", "Tshirt"].map((type) => (
                <MenuItem
                  key={type}
                  borderRadius="6px"
                  value={type}
                  onClick={() => filterCategory(type)}
                >
                  {type}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>

        <Box>
          <HStack
            w="full"
            justifyContent="space-around"
            wrap={{ lg: "", base: "wrap" }}
          >
            {currentItems.map((items) => {
              return (
                <>
                  <Box
                    pos="relative"
                    cursor="pointer"
                    key={items.id}
                    flexBasis="18%"
                  >
                    <Box
                      p="5px"
                      className="inside-box"
                      border="1px solid #dada"
                      overflow="hidden"
                      _hover={{ border: "1px solid green" }}
                    >
                      <Link to={`/details/${items.id}`}>
                        <Image
                          display="block"
                          // max-width=" 80%"
                          //  objectfit="cover"
                           objectFit="cover"
                           
                           width="100%"
                          maxH="220px"
                          src={items.image}
                        ></Image>
                      </Link>
                      <Stack>
                        <Text>{items.title}</Text>
                        <HStack>
                          <Text textDecoration="line-through">
                            Rs{items.oldprice}
                          </Text>
                          <Text>Rs{items.price}</Text>
                        </HStack>
                        <Text fontWeight="600" color="green">
                          •instock
                        </Text>
                        <HStack p="3px" justifyContent="space-between">
                          <Button
                            border="1px solid #000"
                            bg="transparent"
                            size="sm"
                          >
                            S
                          </Button>
                          <Button
                            border="1px solid #000"
                            bg="transparent"
                            size="sm"
                          >
                            M
                          </Button>
                          <Button
                            border="1px solid #000"
                            bg="transparent"
                            size="sm"
                          >
                            L
                          </Button>
                          <Button
                            border="1px solid #000"
                            bg="transparent"
                            size="sm"
                          >
                            +2
                          </Button>
                        </HStack>
                        <Button
                          _hover={{ bg: "black", color: "#fff" }}
                          variant="outline"
                        >
                          {" "}
                          Select Option
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </>
              );
            })}
          </HStack>
        </Box>
        <HStack mt="20px" justifyContent="center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              bg={currentPage === index + 1 ? "gray" : "auto"}
              // _selected={{ bg: "red" }}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </Container>
    </>
  );
};

export default Products;
