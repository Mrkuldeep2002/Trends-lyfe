import { Box, Button, Flex, HStack, Stack, Text, useToast } from '@chakra-ui/react';
import React from 'react'
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Payment = () => {
    const navigate = useNavigate();
  const toast = useToast()
    const { cartTotal } = useCart();
    const totalPrice = cartTotal + cartTotal * 0.08;

  return (
    <Flex align="center"
    justify="center"
    height="100vh">
         <Stack mt="50px"gap="10" alignItems='center' >
        <Text>
        Total Payable Payment is {totalPrice}
        </Text>
      <QRCode value={`upi://pay?pa=9929578931@paytm&pn=Intellemo&tn=cftrhwetaw4gta&am=${totalPrice}`}/>
        <Box >
            <Text>
            Scan Through Any UPI App to Pay
            </Text>
        </Box>
    <HStack justifyContent="end"  w="full">
        
        <Button colorScheme='red' onClick={()=>{
             toast({
                title: 'Payment Canceled.',
                 status: 'error',
                duration: 3000,
                position: 'top-right',
                isClosable: true,
              })
            //   auth.signOut();
              navigate("/home")
        }} >Cancel Payment</Button>
    </HStack>

         </Stack>
    </Flex>
//    </Box>
  )
}

export default Payment
