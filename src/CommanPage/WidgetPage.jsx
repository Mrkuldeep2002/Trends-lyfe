import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import WidgetImage from "../assets/Widget-Img.png";
import React from "react";
import { Link } from "react-router-dom";

const WidgetPage = () => {
  return (
    <Box>
      <HStack
        justifyContent="space-evenly"
        p="0 45px"
        flexDirection={{ md: "row", base: "column" }}
      >
        <Stack w={{ md: "45%", base: "" }} spacing={{ md: "1.5rem", base: "1rem" }} textAlign={{ md: "start", base: "center" }}>
          <Text  fontSize={{ lg: 50, base: 25 }} fontWeight="700">
            Be Creative & Design Your Own Product
          </Text>
          <Text fontSize={{ lg: "18px", base: "15px" }} fontWeight="400">
            Thousands of Designs, Templates & Cliparts to choose from or Design
            your Own.
          </Text>

          <HStack justifyContent="space-evenly" >
            <Link to="/shop">
            <Button colorScheme="red" size={{ md: "lg", base: "sm" }} borderRadius="2px">
              All Products
            </Button></Link>
            <Button colorScheme="green" size={{ md: "lg", base: "sm" }} borderRadius="2px">
              Design for Yourself
            </Button>
          </HStack>
          <Text fontSize={{ lg: "15px", base: "12px" }} fontWeight="400">
            Free Shipping : No order minimums
          </Text>
        </Stack>
        <Image w={{ md: "45%", base: "" }} src={WidgetImage}></Image>
      </HStack>
    </Box>
  );
};

export default WidgetPage;
