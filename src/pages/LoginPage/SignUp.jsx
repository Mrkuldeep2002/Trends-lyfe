import { Alert, Button, FormControl, HStack, Icon, Input, Stack, useToast } from "@chakra-ui/react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, signInWithGoogle } from "../../firebase";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
  const toast = useToast()
  const navigate = useNavigate();
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);



  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      toast({
        title: "Fill all fields",
        status: "error",
        duration: 2000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }
    // console.log(values);
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        toast({
          title: "Account Logged In SuccessFully.",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        
        // navigate("/home");
        //   console.log(user);  console.log(res);

      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        // setErrorMsg(err.message); // console.log("error", err)
        toast({
          title: err.message,
          status: "error",
          duration: 2000,
          position: "top-right",
          isClosable: true,
        });
      });
  };

  return (
    <Stack gap="5" m={4} textAlign="center" p="5">
      <FormControl>
        <Input
          placeholder="Enter your name.."
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
      </FormControl>
      <FormControl>
        <Input
          type="email"
          placeholder="Enter Email.."
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
      </FormControl>
      <FormControl>
        <Input
          type="password"
          placeholder="Enter your Password.."
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
      </FormControl>
     <HStack alignItems="center" mt={4}>
     <Button
        colorScheme="teal"
        width="full"
        isDisabled={submitButtonDisabled}
        _disabled={{
          bg: "gray",
          //   cursor:"not-allowed"
        }}
        
        onClick={handleSubmission}
      >
        Sign In
      </Button>
      <Button onClick={signInWithGoogle} ><Icon boxSize={6} as={FcGoogle}></Icon></Button>
     </HStack>
    </Stack>
  );
};

export default SignUp;
