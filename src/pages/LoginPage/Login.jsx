import React, { useState } from "react";
import { Button, FormControl, Input, Stack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
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
    signInWithEmailAndPassword(auth, values.email, values.pass)
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
        toast({
          title: err.message,
          status: "error",
          duration: 2000,
          position: "top-right",
          isClosable: true,
        });

        // console.log("error", err)
      });
  };

  return (
    <Stack gap="5" m={4} textAlign="center" p="5">
      {/* <b>{errorMsg}</b> */}
      <FormControl>
        {/* <FormLabel>Email</FormLabel> */}
        <Input
          type="email"
          placeholder="Enter Email.."
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
      </FormControl>
      <FormControl>
        {/* <FormLabel>Password</FormLabel> */}
        <Input
          type="password"
          placeholder="Enter your Password.."
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
      </FormControl>
      <Button
        colorScheme="teal"
        width="full"
        mt={4}
        onClick={handleSubmission}
        isDisabled={submitButtonDisabled}
        _disabled={{
          bg: "gray",
          //   cursor:"not-allowed"
        }}
      >
        Log In
      </Button>
    </Stack>
  );
};

export default Login;
