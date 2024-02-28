import React, { useState } from "react";
import FooterG from "../../components/footer/FooterG";
import Nav from "../../components/header/Navbar";
import Slider from "../../CommanPage/Slider";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Products from "../../components/Products/Products";
import Filter from "../../components/Products/Filter";

const Shop = () => {
 

  return (
    <div>
      <Nav />
      <Box
        w="full"
        display="flex"
        mb="50px"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="2.5rem" fontWeight="500">
            Shop
        </Text>
        <Breadcrumb
          spacing="8px"
          separator={<FaChevronRight color="gray.500" />}
        >
          <BreadcrumbItem>
            <Link to={"/"}>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Shop</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
     
      <Products  />
      <Slider />
      <FooterG />
    </div>
  );
};

export default Shop;
