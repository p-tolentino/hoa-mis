import { useState } from 'react'
import { MdComputer as Logo } from 'react-icons/md'
import { Link, Box, Flex, HStack, Heading, Spacer } from '@chakra-ui/react'
import SignInButton from './SignInButton'
import { NavLink } from 'react-router-dom'

const colors = {
  selected: '#E9C850',
  unselected: 'white'
}

function Navbar () {
  const [clickedLinkId, setClickedLinkId] = useState('')

  const handleLinkClick = (linkId: string) => {
    setClickedLinkId(linkId)
  }

  return (
    <Flex
      as='nav'
      p='20px'
      alignItems='center'
      bg='brand.500'
      color='white'
      wrap='wrap'
      pos='sticky'
      top='0'
    >
      <Flex>
        <Heading ml='10px' color='white' size='xl'>
          <Logo />
        </Heading>
        <Box ml='20px'>
          <Heading paddingTop='5px' size='md'>
            <Link href='/'>System Name</Link>
          </Heading>
        </Box>
      </Flex>
      <Spacer />
      <HStack gap='10'>
        <Link
          href='/'
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
          href='/#facilitiesSection'
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
          onClick={() => handleLinkClick('Terms and Conditions')}
          color={
            clickedLinkId === 'policies' ? colors.selected : colors.unselected
          }
        >
          Policies
        </Link>
        <Link
          href='/#contactUsSection'
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
        <Link
          as={NavLink}
          to={'membership-menu'}
          _hover={{ color: '#E9C850' }}
          padding='10px'
          px='20px'
          onClick={() => handleLinkClick('test membership module')}
          color={
            clickedLinkId === 'test membership module'
              ? colors.selected
              : colors.unselected
          }
        >
          Test Membership Module
        </Link>
      </HStack>
      <Spacer />
      <SignInButton />
    </Flex>
  )
}

export default Navbar
