import { Box, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaHandsHelping, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const FooterData = [
    {
      id: 1,
      name: "For Customers",
      links: [
        { id: 1, name: "Account Details", path: "/account-details" },
        { id: 2, name: "Cart", path: "/cart" },
        { id: 3, name: "Wishlist", path: "/wishlist" },
        { id: 4, name: "Orders", path: "/orders" },
        { id: 5, name: "Track OrderNew", path: "/track-order" },
        { id: 6, name: "Addresses", path: "/addresses" },
        { id: 7, name: "Lost Password", path: "/lost-password" },
        { id: 8, name: "Return & Refund Policy", path: "/return-refund" },
      ],
    },
    {
      id: 2,
      name: "Quick Links",
      links: [
        { id: 9, name: "Home", path: "/" },
        { id: 10, name: "Shop", path: "/shop" },
        { id: 11, name: "Design Editor", path: "/design-editor" },
        { id: 12, name: "Blog", path: "/blog" },
        { id: 13, name: "My Account", path: "/my-account" },
        { id: 14, name: "About Us", path: "/about-us" },
        { id: 15, name: "Privacy Policy", path: "/privacy-policy" },
        { id: 16, name: "Terms and Conditions", path: "/terms-and-conditions" },
      ],
    },
  ];

  return (
    <>
      <Box as="section" bg="#EBEBEB" p="60px 0px 15px 0px">
        <HStack
          p="0 35px"
          justifyContent="space-between"
          flexDirection={{
            md: "row",
            base: "column",
          }}
        >
          <Stack w="24%">
            <Image
              src="https://trendlyfe.in/wp-content/uploads/2023/06/TrendLyfe-Web-Logo-White-Trans-768x256.png"
              alt=""
            ></Image>
            <Text textAlign="center" color="#7a7a7a">
              {" "}
              TrendLyfe – Be a trendsetter, live the TrendLyfe!
            </Text>
          </Stack>
          <HStack w="73%" justifyContent="space-around" alignItems="flex-start">
            {FooterData.map((section, index) => (
              <Box key={index}>
                <Text fontSize="1.1rem" fontWeight="700">
                  {section.name}
                </Text>
                <Stack>
                  {section.links.map((link) => (
                    <Link key={link.id} to={link.path}>
                      <li className="Nav-hover" id="footer-hover">{link.name}</li>
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}

            <Box>
              <Text fontSize="1.1rem" fontWeight="700">
                Contact Info
              </Text>
              <Stack>
                <HStack>
                  <Icon as={FaLocationDot} />
                  <Stack>
                    <Text>
                      <b>Address</b>
                    </Text>
                    <Text>Kolaghat, East Medinipur, WB, 721151</Text>
                  </Stack>
                </HStack>
                <HStack>
                  <Icon as={FaPhoneAlt} />
                  <Stack>
                    <Text>
                      <b>Phone:</b>
                    </Text>
                    <Text>+91 70011 75200</Text>
                  </Stack>
                </HStack>
                <HStack>
                  <Icon as={MdEmail} />
                  <Stack>
                    <Text>
                      <b>Email:</b>
                    </Text>
                    <Text>support@trendlyfe.in</Text>
                  </Stack>
                </HStack>
                <HStack>
                  <Icon as={FaMessage} />
                  <Stack>
                    <Text>
                      <b>Chat with us:</b>
                    </Text>
                    <Text>Click here to contact </Text>
                  </Stack>
                </HStack>
                <HStack>
                  <Icon as={FaHandsHelping} />
                  <Stack>
                    <Text>
                      <b>HelpDek:</b>
                    </Text>
                    <Text>HelpDek: support.demoody.com</Text>
                  </Stack>
                </HStack>
              </Stack>
            </Box>
          </HStack>
        </HStack>
      </Box>
      <Box as="section" bg="#EBEBEB" p="0 35px ">
        <Text p="15px" textAlign="center">
          Copyright © 2023 KULDIP All Right Reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
