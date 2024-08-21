import React from 'react'
import Nav from '../components/header/Navbar'
import FooterG from '../components/footer/FooterG'
import { Container, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <>
    <Nav />
    <Container maxW="container.xl"  textAlign="left">
      <Text fontSize="4xl" fontWeight="500">
      About us
      </Text>

    </Container>
    <FooterG />
    </>
  )
}

export default About
