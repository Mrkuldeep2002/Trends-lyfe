import {
  Avatar,
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { FaBars, FaMoon } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import React, { useState } from "react";

import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { FaCartShopping } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { auth } from "../../firebase";

const TopNav = ({ onOpen, onSearch  }) => {
  const toast = useToast()
  const navigate = useNavigate();
  const { totalUniqueItems } = useCart();
  const { colorMode, toggleColorMode } = useColorMode();
  const Logout =()=>{
    toast({
      title: 'Account Logged Out .',
       status: 'info',
      duration: 2000,
      position: 'top',
      isClosable: true,
    })
    auth.signOut();
    navigate("/")
  }

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery)
    // console.log(searchQuery);
    // navigate("/searchresult")
  };
  return (
    <>
      <Container p="3" maxW="container.xl" mb="15px" >
        <Flex justifyContent="space-between">
          <HStack>
            <Icon
              fontSize="1.5rem"
              onClick={onOpen}
              display={{
                base: "block",
                xl: "none",
              }}
              as={FaBars}
              _hover={{ color: "#1FAB89" }}
            />
            <Image
              display={{
                xl: "block",
                base: "none",
              }}
              maxW="150px"
              src="https://trendlyfe.in/wp-content/uploads/2023/06/TrendLyfe-Web-Logo-White-Trans-768x256.png"
              alt=""
            ></Image>
          </HStack>
          <Image
            display={{
              base: "block",
              xl: "none",
            }}
            maxW="150px"
            src="https://trendlyfe.in/wp-content/uploads/2023/06/TrendLyfe-Web-Logo-White-Trans-768x256.png"
            alt=""
          ></Image>
          <HStack
            display={{
              xl: "flex",
              base: "none",
            }}
            w="full"
            justifyContent="space-between"
            px="6"
          >
            <HStack
              fontSize="16px"
              // color="#2d2c2c"
              fontWeight="600"
              gap="2.5rem"
            >
              <Link  as={RouterLink}
            to="/" >
                <li className="Nav-hover">Home</li>
              </Link>
              <Link  as={RouterLink}
            to="/shop" >
                <li className="Nav-hover">Shop</li>
              </Link>
              <Link  as={RouterLink}
            to="/about" >
                <li className="Nav-hover">About Us</li>
              </Link>
              <Link  as={RouterLink}
            to="/cart" >
                <li className="Nav-hover">Cart</li>
              </Link>
            </HStack>

            <HStack
              border="2px solid #1FAB89"
              borderRadius="5px"
              p="8px 18px"
              _hover={{ border: "2px solid #0dbd9a" }}
            >
              <Input
                // placeholder={searchQuery}
                placeholder="Search here"
                // color="#000"
                size="md"
                variant="unstyled"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* <input  type="text"  placeholder="Search here" /> */}
              <Icon
                as={CiSearch}
                fontSize="1.7rem"
                _hover={{ color: "#1FAB89" }}
                onClick={handleSearch}
              />
            </HStack>
          </HStack>
          <HStack
            className="Icons"
            gap="1.5rem"
            m="0 14px"
            fontSize="1.3rem"
            justifyContent={{
              base: "",
              xl: "flex-end",
            }}
          >
            <HStack position="relative" _hover={{ color: "#1FAB89" }} onClick={() => toggleColorMode()}>
              {colorMode === "dark" ? (
                <FaMoon/>
              ) : (
                <MdSunny/>
              )}
            </HStack>
            <Link to={"/cart"}> <HStack pos="relative">
              
              <Icon as={FaCartShopping} _hover={{ color: "#1FAB89" }} />
              <Box
                position=" absolute"
                top="-.525rem"
                right="-.625rem"
                backgroundColor="teal"
                color="#fff"
                width="18px"
                fontSize="12px"
                textAlign="center"
                borderRadius="50%"
              >
                {totalUniqueItems}
              </Box>
            </HStack>
</Link>
           
            <Menu>
              <MenuButton colorScheme="pink">
                <Avatar bg="teal.500" />
              </MenuButton>
              <MenuList fontSize="1rem">
                <MenuGroup title="Profile" fontWeight="700">
                  <Link to={"/account"}><MenuItem>My Account</MenuItem></Link>
                  <MenuItem onClick={Logout}>Logout </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Container>
    </>
  );
};

export default TopNav;
