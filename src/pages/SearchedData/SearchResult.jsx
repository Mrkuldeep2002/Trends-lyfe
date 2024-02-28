import React, { useEffect, useState } from "react";
import Nav from "../../components/header/Navbar";
import { Link, useLocation } from "react-router-dom";
// import ProductData from '../../data/ProductData';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import ProductData from "../../data/ProductData";

const SearchResult = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query");
  const [filterdata, setFilteredData] = useState([]);

  useEffect(() => {
    const SearchFood = () => {
      if (!query) {
        setFilteredData([]);
        return;
      }

      const filter = ProductData?.filter((product) =>
        product.tages.toLowerCase().includes(query.toLowerCase())
      );

      // console.log(filter);
      setFilteredData(filter);
    };

    // Call the search function when the component mounts or when the query changes
    SearchFood();
  }, [query]);

  return (
    <>
      <Nav />
      {/* Search result
      <div>
        <p>Search Query: {query}</p>
      </div> */}

      {filterdata.length === 0 && query
      ? (
        <Flex
          direction="column"
          alignItems="center"
          gap="50px"
          mt="50px"
          textAlign="center"
          p="20px"
        >
          <Text fontWeight="600" fontSize="20">
            No products found for "{query}".
          </Text>
          <Link to="/shop">
          <Button colorScheme="teal" w="lg" variant="solid">
            Go Back To Shop
          </Button></Link>
        </Flex>
      
      ):(

      <Container maxW="container.xl">
        <Text fontWeight="500" fontSize={{ md: "30", base: "" }} textAlign="center"
        m="25px 0">
          {filterdata.length} products Found for Search Query "{query}"
        </Text>
        <Box>
          <HStack
            w="full"
            justifyContent="space-around"
            wrap={{ lg: "", base: "wrap" }}
          >
            {filterdata.map((items) => {
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
      )}
    </>
  );
};

export default SearchResult;
