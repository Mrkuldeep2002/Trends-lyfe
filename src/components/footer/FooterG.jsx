import { Grid, GridItem,Box, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaHandsHelping, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterG = () => {
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
    <Grid 
    // alignItems="center"       
    justifyItems="center"
    p="60px 0px 15px 0px"
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(3   ,1fr)",
        xl: "repeat(4,1fr)",
      }}

      gap={10}
    >
        <GridItem p="15px">
        <Stack 
        // w="24%"
        >
            <Image
              src="https://trendlyfe.in/wp-content/uploads/2023/06/TrendLyfe-Web-Logo-White-Trans-768x256.png"
              alt=""
              maxW="300px"
            ></Image>
            <Text textAlign="center" color="#A0AEC0">
              {" "}
              TrendLyfe – Be a trendsetter, live the TrendLyfe!
            </Text>
          </Stack>
        </GridItem>
        {FooterData.map((section, index) => (
              <GridItem key={index} p="15px">
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
              </GridItem>
            ))}
        
        <GridItem p="15px">
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
            </GridItem>
    </Grid>
  );
};

export default FooterG;
