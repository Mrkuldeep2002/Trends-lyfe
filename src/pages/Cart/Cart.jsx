import React from "react";
import Nav from "../../components/header/Navbar";
import { useCart } from "react-use-cart";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaTruck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";

const Cart = () => {
  const {
    isEmpty,
    items,
    removeItem,
    quantity,
    updateItemQuantity,
    cartTotal,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <Nav />
        <Container maxW="container.xl">
          <Stack alignItems="center">
            <Image
              maxW="350px"
              margin="0 auto"
              objectFit="cover"
              src="https://trendlyfe.in/wp-content/themes/minimog/assets/woocommerce/empty-cart.png"
            ></Image>

            <Text fontSize="2rem" fontWeight="500">
              {" "}
              Your cart is Currently empty
            </Text>
            <Text fontWeight="400">
              {" "}
              You may check out all the available products and buy some in the
              shop.
            </Text>
            <Link to="/shop">
              <Button colorScheme="teal" p="10px 40px">
                {" "}
                Return To Shop
              </Button>
            </Link>
          </Stack>
        </Container>
      </>
    );

  return (
    <>
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
          Cart
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
            <BreadcrumbLink>Cart</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Container maxW="container.xl">
        {items.map((items) => {
          return (
            <>
              <HStack
                className="itembox-out"
                pos="relative"
                borderRadius="10px"
                key={items.id}
                p="5px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                mb="10px"
                overflow="hidden"
                // border="solid red"
                alignItems={{
                  base: "start",
                  sm: "center",
                }}
              >
                <Box>
                  <Link to={`/details/${items.id}`}>
                    <Image
                      borderRadius="8px"
                      maxW="150px"
                      src={items.image}
                    ></Image>
                  </Link>
                </Box>
                <HStack
                  w="full"
                  flexDir={{
                    base: "column",
                    sm: "row",
                  }}
                  alignItems={{
                    base: "start",
                    sm: "center",
                  }}
                  justifyContent="space-around"
                >
                  <Flex
                    flexDir="column"
                    alignItems="start"
                    justifyContent="space-around"
                    w="150px"
                    // border="solid red"
                  >
                    <Text>{items.title}</Text>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        removeItem(items.id);
                      }}
                    >
                      Remove
                    </Button>
                  </Flex>
                  <Box>
                    <Text>₹{items.price}</Text>
                  </Box>
                  <Box
                    className="Qty"
                    bg="#F1F1F1"
                    borderRadius="5px"
                    // border="solid red"
                  >
                    <Button
                      variant="none"
                      onClick={() => {
                        updateItemQuantity(items.id, items.quantity + 1);
                      }}
                    >
                      +
                    </Button>
                    {items.quantity}
                    <Button
                      variant="none"
                      onClick={() => {
                        updateItemQuantity(items.id, items.quantity - 1);
                      }}
                    >
                      -
                    </Button>
                  </Box>
                  <Box>
                    <Text>₹{items.price * items.quantity}</Text>
                  </Box>
                </HStack>
              </HStack>

              {/* <Divider  mb="15px" /> */}
            </>
          );
        })}
      </Container>
      <Container maxW="container.xl" justifyContent="right" display="flex">
        <Stack
          p="20px 30px 30px"
          w="400px"
          maxW="100%"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          borderRadius="5"
        >
          <HStack
            justifyContent="space-between"
            fontSize="30"
            borderBottom=".5px solid #aeaaaa;"
            pb="5"
          >
            <Icon as={MdEdit} w="30%" borderRight=".5px solid #aeaaaa;"></Icon>
            <Icon as={FaTruck} borderRight=".5px solid #aeaaaa;" w="30%"></Icon>
            <Icon as={CiDiscount1} w="30%"></Icon>
          </HStack>

          <HStack justifyContent="space-between">
            <Text color="#757575">SubTotal :</Text>
            <Text fontWeight="600"> ₹{cartTotal}</Text>
          </HStack>
          {/* <HStack> 
          <Text>Shipping : ₹40</Text></HStack> */}
          <HStack justifyContent="space-between">
            <Text color="#757575">Total :</Text>
            <Text >
              <Text textAlign="end" fontWeight="600">
              ₹{(cartTotal + cartTotal * 0.08)}
              </Text>
              <Text>(include <i>₹{Math.round(cartTotal * 0.08)}</i> Tax)</Text>
            </Text>
          </HStack>
          <Link to="/payment">
          <Button w="full" variant="solid" colorScheme="teal">
            Checkout
          </Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default Cart;
