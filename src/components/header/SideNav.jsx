import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    List,
    ListItem,
    Stack,
    Image,
  } from "@chakra-ui/react";
  import { Link, Link as RouterLink } from "react-router-dom";

  const SideDrawer = ({ isOpen, onClose }) => {
    return (
      <>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
              
            <Stack
              fontSize="16px"
              // color="#2d2c2c"
              fontWeight="600"
              gap="2.5rem"
            >
               <Image
              // display={{
              //   xl: "block",
              //   base: "none",
              // }}
              maxW="150px"
              src="https://trendlyfe.in/wp-content/uploads/2023/06/TrendLyfe-Web-Logo-White-Trans-768x256.png"
              alt=""
            ></Image>
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
            </Stack>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default SideDrawer;