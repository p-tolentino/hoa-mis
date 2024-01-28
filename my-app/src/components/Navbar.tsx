import { useState } from 'react'
import { MdComputer as Logo } from 'react-icons/md'
import {
  Link,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer
} from '@chakra-ui/react'
// import { NavLink } from "react-router-dom";

const colors = {
  selected: '#E9C850',
  unselected: 'white'
}

function Navbar () {
  const [clickedLinkId, setClickedLinkId] = useState('')

  const handleLinkClick = (linkId: string) => {
    setClickedLinkId(linkId)
  }

  const resetColors = () => {
    setClickedLinkId('')
  }
  return (
    <Flex
      as='nav'
      p='20px'
      alignItems='center'
      bg='brand.500'
      color='white'
      wrap='wrap'
    >
      <Flex>
        <Heading ml='10px' color='white' size='xl'>
          <Logo />
        </Heading>
        <Box ml='20px'>
          <Heading paddingTop='5px' size='md'>
            System Name
          </Heading>
        </Box>
      </Flex>
      <Spacer />
      <HStack gap='10'>
        <Link
          _hover={{ color: '#E9C850' }}
          padding='10px'
          px='20px'
          onClick={() => handleLinkClick('about us')}
          color={
            clickedLinkId === 'about us' ? colors.selected : colors.unselected
          }
        >
          About
        </Link>
        <Link
          _hover={{ color: '#E9C850' }}
          padding='10px'
          px='20px'
          onClick={() => handleLinkClick('facilities')}
          color={
            clickedLinkId === 'facilities' ? colors.selected : colors.unselected
          }
        >
          Facilities
        </Link>
        <Link
          _hover={{ color: '#E9C850' }}
          padding='10px'
          px='20px'
          onClick={() => handleLinkClick('policies')}
          color={
            clickedLinkId === 'policies' ? colors.selected : colors.unselected
          }
        >
          Policies
        </Link>
        <Link
          _hover={{ color: '#E9C850' }}
          padding='10px'
          px='20px'
          onClick={() => handleLinkClick('contact us')}
          color={
            clickedLinkId === 'contact us' ? colors.selected : colors.unselected
          }
        >
          Contact Us
        </Link>
      </HStack>
      <Spacer />
      <Button
        // as={NavLink}
        // to="/login"
        colorScheme='yellow'
        borderRadius='5'
        onClick={resetColors}
      >
        Sign in
      </Button>
    </Flex>
  )
}

export default Navbar
