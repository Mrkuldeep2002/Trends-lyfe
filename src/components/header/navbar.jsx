import { Box, HStack, Icon, Image, Input, Stack, Text } from "@chakra-ui/react";
import { FaBars, FaRegHeart, FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

import React from "react";
import { color } from "framer-motion";
import Navlist from "./Navlist";

const Navbar = () => {
  return (
    <>
      <Box as="header" bg="#1FAB89">
        <Text
          py="10px"
          color="#fff"
          fontSize="15px"
          textAlign="center"
          fontWeight="500"
        >
          Free Delivery on orders over ₹599. Don’t miss discount.
        </Text>
      </Box>
      <Stack
        alignItems="center"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        // position="sticky"
        // top="0"
        // zIndex="999"
      >
        <Box>
          <Image
            h="80px"
            p="14px 0"
            src="https://trendlyfe.in/wp-content/uploads/2023/06/TrendLyfe-Web-Logo-White-Trans-768x256.png"
            alt=""
          ></Image>
        </Box>
        <HStack justifyContent="space-between" w="full" p="0 50px">
          <Box w="25%">
            <Icon
              fontSize="1.5rem"
              as={FaBars}
              display={{
                base: "block",
                xl: "none",
              }}
            />
          </Box>
          <HStack
            border="2px solid #1FAB89"
            borderRadius="5px"
            justifyContent="space-between"
            w="70%"
            // fontSize="2rem"
            p="8px 18px"
            _hover={{ border: "2px solid #0dbd9a" }}
          >
            <Input
              placeholder="Search here"
              color="#000"
              size="md"
              variant="unstyled"
            />
            {/* <input  type="text"  placeholder="Search here" /> */}
            <Icon
              as={CiSearch}
              fontSize="1.7rem"
              _hover={{ color: "#1FAB89" }}
            />
          </HStack>
          <HStack
            className="Icons"
            gap="2rem"
            m="0 14px"
            fontSize="1.3rem"
            w="25%"
            justifyContent="end"
          >
            <Icon as={FaRegUser} _hover={{ color: "#1FAB89" }} />
            <Icon as={FaRegHeart} _hover={{ color: "#1FAB89" }} />
            <Icon as={MdOutlineShoppingBag} _hover={{ color: "#1FAB89" }} />
          </HStack>
        </HStack>
        <Box w="full" display={{
                xl: "block",
                base: "none",
              }}>
          <Navlist />
        </Box>
      </Stack>
      <Box as="header" bg="#1FAB89">
        <Text
          p="100px"
          color="#fff"
          fontSize="15px"
          textAlign="center"
          fontWeight="500"
        >
          Free Delivery on orders over ₹599. Don’t miss discount.
        </Text>
      </Box>
    </>
  );
};

export default Navbar;
