import React, { useState } from "react";
import Items from "../../data/ProductData";
import { Link, useParams } from "react-router-dom";
import Nav from "../../components/header/Navbar";
import { useCart } from "react-use-cart";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  Tag,
  Td,
  Text,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  FaChevronRight,
  FaGift,
  FaRegStar,
  FaTruck,
  FaTruckMoving,
} from "react-icons/fa";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import SizeChart from "./SizeChart";
import FooterG from "../../components/footer/FooterG";
const Detail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const product = Items.find((product) => product.id === id);
  const { addItem, inCart, updateItemQuantity, cartTotal } = useCart();
  const toast = useToast();
  const [change, setchange] = useState(`${product.image}`);
  const [Quantity, setQuantity] = useState(1);
  const click = (e) => {
    setchange(e);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

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
            <BreadcrumbLink>Product</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{product.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Size Chart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SizeChart />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div>
        {/* upper Detail */}
        <HStack
          alignItems="start"
          justifyContent="space-between"
          p="20px"
          flexDir={{ base: "column", md: "row" }}
        >
          <HStack alignItems="start">
            <Stack
              className="imageChanges"
              p=" 0 10px"
              w={{ base: "100px", lg: "auto" }}
            >
              <Image
              maxW="150px"
                borderRadius="10px"
                src={product.image}
                onClick={() => {
                  click(`${product.image}`);
                }}
              />
              <Image
                borderRadius="10px"
                src={product.image2}
                onClick={() => {
                  click(`${product.image2}`);
                }}
              />
            </Stack>
            <Box className="MainImage" border="1px solid black">
              <Image w="100vw" src={change} />
            </Box>
          </HStack>
          {/* details */}
          <Stack w="full" p="0 15px">
            <Stack className="right-detail" gap={5}>
              <Box>
                <Tag
                  borderRadius="10px"
                  size="lg"
                  variant="solid"
                  colorScheme="teal"
                >
                  31%
                </Tag>
              </Box>
              <HStack justifyContent="space-between">
                <Text fontWeight="500" fontSize="25px">
                  {product.title}
                </Text>
                <Button
                  w="0"
                  size="lg"
                  borderRadius="100px"
                  variant="outline"
                  _hover={{ bg: "red" }}
                >
                  <Icon as={FaRegStar} />{" "}
                </Button>
              </HStack>
              {/* <p>{product.Description}</p> */}
              <Box>
                <Button
                  leftIcon={<MdOutlinePhotoSizeSelectSmall />}
                  colorScheme="gray"
                  variant="ghost"
                  onClick={onOpen}
                >
                  Size Chart
                </Button>
              </Box>

              <Flex
                w="full"
                class="product-price"
                gap="3"
                alignItems="center"
                flexDir="row"
              >
                <Text
                  color="#929292"
                  fontSize="1.1rem"
                  textDecoration="line-through"
                >
                  ₹{product.oldprice}
                </Text>
                <Text fontSize="1.3rem" fontWeight="500">
                  ₹{product.price}
                </Text>
              </Flex>
              <HStack>
                <Box className="Qty" bg="#F1F1F1" borderRadius="5px">
                  <Button
                    variant="none"
                    onClick={() => setQuantity(Quantity + 1)}
                  >
                    +
                  </Button>
                  <span>{Quantity}</span>
                  <Button
                    variant="none"
                    onClick={() => setQuantity(Quantity - 1)}
                  >
                    -
                  </Button>
                </Box>
                <Button
                  flexGrow="1"
                  variant="outline"
                  onClick={() => {
                    addItem(product, Quantity);
                    toast({
                      position: "top",
                      title: "Product Added to cart",
                      status: "success",
                      duration: 1000,
                      isClosable: true,
                    });
                  }}
                >
                  {inCart(product.id) ? "Added✅" : "add to cart"}
                </Button>
              </HStack>
            </Stack>

            <Divider p="10px" />
            <Stack>
              <HStack>
                <FaTruckMoving />
                <Text fontWeight="500">Express Delivery:</Text>
                <Text fontWeight="300">Fastest Delivery by Demoody</Text>
              </HStack>
              <HStack>
                <FaTruck />
                <Text fontWeight="500">Estimated Delivery:</Text>
                <Text fontWeight="300"> 28 - 30 Jan, 2024</Text>
              </HStack>
              <HStack>
                <FaGift />
                <Text fontWeight="500">Free Shipping & Returns:</Text>
                <Text fontWeight="300"> On all orders over ₹599.00</Text>
              </HStack>
              <Box></Box>
            </Stack>
            <Box w="full" bg="#F1F1F1" p="15px 15px 10px" textAlign="center">
              <Image src="https://trendlyfe.in/wp-content/uploads/2023/06/pay.png"></Image>
              Guaranteed safe & secure checkout
            </Box>
          </Stack>
        </HStack>

        {/* descibe */}
        <Box borderBottom="1px dashed #85d15f " m="10px 10px" className="Bottom detail">
          <Tabs position="relative" variant="unstyled">
         
            <TabList flexWrap="wrap" p="3px" borderRadius="6px" gap="8px">
            {["Description","Additional information","Reviews"].map((tab)=>(
              <Tab fontWeight="600" 
              key={tab} fontSize="sm" p="6px" borderRadius="6px" >{tab}</Tab>
            ))}
            
            {/* <Tab>Tab 2</Tab> */}
          </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="black"
              borderRadius="1px"
            />
            <TabPanels p={{ base: "", md: "0 25px" }} w="full">
              <TabPanel>
                <ul>
                  <li>180 GSM pure Premium Cotton</li>
                  <li> Bio-Washed</li>
                  <li>No-Shrinking and Color fade after washing</li>
                  <li>Permanent Color, 100% Cotton</li>
                  <li>7 days Replacement (know more)</li>
                  <li>
                    100% Cotton (Bio-washed).Used Original color and permanent
                    colors
                  </li>
                </ul>
              </TabPanel>
              <TabPanel>
                <Table w="0 25px" variant="unstyled">
                	
	
	

                  <Tr>
                    <Td>Weight</Td>
                    <Td>0.250 kg</Td>
                  </Tr>
                  <Tr>
                    <Td>Dimensions</Td>
                    <Td>40 × 50 × 5 cm</Td>
                  </Tr>
                  <Tr>
                    <Td>Size</Td>
                    <Td>L, M, S, XL, XXL</Td>
                  </Tr>
                  
                </Table>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>


                

      </div>

      <FooterG />

    </>
  );
};

export default Detail;
