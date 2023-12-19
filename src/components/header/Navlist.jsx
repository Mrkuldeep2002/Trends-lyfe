import React, { useState } from "react";
import { HStack, Box, Link, Flex, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import "../../App.css";

const Navlist = () => {
  const NavTab = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/Shop" },
    { name: "Design Editor", link: "/Design" },
    {
      name: "Categories",
      link: "/Categories",
      subMenu: [
        { name: "Men's T-Shirt", link: "/mens-tshirt" },
        { name: "Women's T-Shirt", link: "/womens-tshirt" },
        { name: "Hoodies for Men", link: "/hoodies-men" },
        { name: "Hoodies for Women", link: "/hoodies-women" },
        { name: "Mobile Cover", link: "/mobile-cover" },
      ],
    },
    { name: "Cart", link: "/Cart" },
    { name: "My Account", link: "/My Account" },
    { name: "Blog", link: "/Blog" },
    { name: "About Us", link: "/About" },
    { name: "Privacy", link: "/Privercy" },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMenuItem(index);
  };

  const handleMouseLeave = () => {
    setActiveMenuItem(null);
  };

  return (
    <HStack
    position="relative"
      justifyContent="space-around"
      fontSize="1rem"
      fontWeight="600"
      p="10px 50px"
    >
      {NavTab.map((nav, index) => (
        <Box
          key={nav.name}
          position="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            as={RouterLink}
            to={nav.link}
            key={nav.name}
          >
            <li className="Nav-hover">{nav.name}</li>
          </Link>
          {nav.subMenu && activeMenuItem === index && (
            <Stack
               className="submenu"
              position="absolute"
              top="100%"
              left="0"
              bg="#FFF"
              color="#000"
              fontWeight="600"
              border="1px"
              borderRadius="10px"
              mt={2}
            >
              {nav.subMenu.map((subItem) => (
                <Link
                  as={RouterLink}
                  to={subItem.link}
                  key={subItem.name}
                  whiteSpace="nowrap"
                  display="block"
                  py={2}
                  px={4}
                >
                  <li>{subItem.name}</li>
                </Link>
              ))}
            </Stack>
          )}
        </Box>
      ))}
    </HStack>
  );
};

export default Navlist;
