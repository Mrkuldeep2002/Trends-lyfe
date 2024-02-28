import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./login.css";
import { useAuthState } from "react-firebase-hooks/auth";
import SignUp from "./SignUp";
import Login from "./Login";
import { auth } from "../../firebase";
import {  useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

// checkUSer

// checkUSer
useEffect(() => {
  if (loading) {
    // maybe trigger a loading screen
    return;
  }
  if (user) navigate("/home");
}, [user, loading]);



  const handleHeadingClick = () => {
    // Programmatically toggle the checkbox when heading is clicked
    const checkbox = document.getElementById("chk");
    checkbox.checked = !checkbox.checked;
  };

  return (
    <>
      <Box
        m="50px auto"
        w="350px"
        overflow="hidden"
        // bg="red"
        h="500px"
        className="box"
        borderRadius="10px"
        boxShadow="5px 20px 50px #000"
      >
        <Input
          type="checkbox"
          id="chk"
          aria-hidden="true"
          display="none"
        ></Input>
        <Box className="signup" pos="relative" w="100%" h="100%">
          <form>
            <Box
              className="label"
              fontSize="2.3rem"
              justifyContent="center"
              display="flex"
              m="20px"
              fontWeight="600"
              cursor="pointer"
              transition=".5s ease-in-out"
              //   for="chk"
              aria-hidden="true"
              onClick={handleHeadingClick}
            >
              Sign up
            </Box>
            <SignUp />
          </form>
        </Box>
        <Box
          className="login"
          w="full"
          bg="#eee"
          h="460px"
          py="5"
          transform="translateY(-110px) "
          transition=".8s ease-in-out"
          borderRadius="60%/10%"
        >
          <form>
            <Box
              className="label"
              fontSize="2.3rem"
              justifyContent="center"
              display="flex"
              fontWeight="600"
              cursor="pointer"
              m="5"
              transform="scale(.6)"
              transition=".5s ease-in-out"
              aria-hidden="true"
              onClick={handleHeadingClick}
            >
              Login
            </Box>
            <Login />
          </form>
        </Box>
      </Box>
    </>
  );
};

export default LoginSignup;
