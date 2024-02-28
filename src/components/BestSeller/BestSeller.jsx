import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";


import { Link } from "react-router-dom";
import ProductData from "../../data/ProductData";

const BestSeller = () => {
  const bestSeller = ProductData.filter(item => item.type === "bestseller")
  return (
    <>
      {/* <Container
        maxW="container.xl"
        mb="1rem"
        borderBottom="2px solid #c32018"
        display="flex"
        justifyContent="space-between"
        // alignItems="center"n
        p="0"
      >
        <Text fontSize="2.5rem" fontWeight="600">
          Daily Deal Of The Day
        </Text>
        <Box bg="red" p="2px 10px">
          <Text
            color="white"
            fontWeight="700"
            fontSize="2rem"
            letterSpacing="2px"
          >
            00:00:00:00
          </Text>
        </Box>
      </Container> */}
      <Container maxW="container.xl" bg="">
        <Box>
          <HStack
            margin-bottom=" 40px"
            w="full"
            justifyContent="space-around"
            // wrap={{ lg: "nowrap", base: "wrap" }}
            wrap="wrap"
            // maxH="500px"
            overflowY="hidden"
          >
            {/* data.filter(item => item.type === "bestseller") */}
            {bestSeller.slice(0,5).map((items) => {
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
      </Container>
    </>
  );
};

export default BestSeller;
