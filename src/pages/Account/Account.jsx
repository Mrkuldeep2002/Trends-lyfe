import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase';
import { Box, Button, Flex, HStack, Stack, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/header/Navbar';

const Account = () => {
  const navigate = useNavigate();
  const toast = useToast()
    const [userName, setUserName] = useState("");

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUserName(user.displayName);
        } else setUserName("");
      });
    }, []);

    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
      setLoading(true);
  
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        // Handle errors if needed
      } finally {
        // Set loading back to false after the action is complete
        setLoading(false);
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
    };

  return (
    // <div>
    //   Welcome {userName}
    // </div>
    <>
    <Nav/>
    <Flex mt="150px" justifyContent="center" h="100vh"    > 
      <Stack alignItems="center"  justifyContent="center" h="150px" w="400px" >
        <Box><Text>Welcome {userName} 
        </Text>
        </Box>
        <Button
    //  isLoading
    onClick={handleClick}
    isLoading={loading}
    loadingText='Logging Out'
    colorScheme='teal'
    // variant='outline'
  >
    Log out
  </Button>
      </Stack>
    </Flex>
    </>
  )
}

export default Account
