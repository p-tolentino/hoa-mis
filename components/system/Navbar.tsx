'use client'

import { useState } from 'react'
import { MdComputer as Logo } from 'react-icons/md'
import {
  Link,
  Box,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  Show,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  Divider
} from '@chakra-ui/react'
import SignInButton from './SignInButton'
import { HamburgerIcon } from '@chakra-ui/icons'

const colors = {
  selected: '#E9C850',
  unselected: 'white'
}

export const Navbar = () => {
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
      pos='sticky'
      top='0'
      direction='row'
    >
      <Flex>
        <Heading ml='10px' color='white' size={{ base: 'xl', md: 'xl' }}>
          <Logo />
        </Heading>
        <Box ml='20px'>
          <Heading paddingTop='5px' fontSize={{ base: '9px', md: 'md' }}>
            <Text as='a' rel='noopener' href='/' fontFamily='font.heading'>
              System Name
            </Text>
          </Heading>
        </Box>
      </Flex>
      <Show breakpoint='(max-width: 767px)'>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            ml='200px'
            variant='outline'
            color='brand.300'
          />
          <MenuList color='black'>
            <MenuItem as='a' rel='noopener' href='/'>
              About
            </MenuItem>
            <MenuItem as='a' rel='noopener' href='/#registerHOA'>
              Register HOA
            </MenuItem>
            <MenuItem as='a' rel='noopener' href='/#policies'>
              Terms and Conditions
            </MenuItem>
            <MenuItem as='a' rel='noopener' href='/#contactUs'>
              Contact Us
            </MenuItem>
            <Divider />
            <MenuItem as='a' rel='noopener' href='login'>
              Sign in
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>
      <Show above='md'>
        <Spacer />
        <HStack gap='10'>
          <Link
            href='/#about'
            _hover={{ color: '#E9C850' }}
            padding='10px'
            fontFamily='font.body'
            px='20px'
            onClick={() => handleLinkClick('about us')}
            color={
              clickedLinkId === 'about us' ? colors.selected : colors.unselected
            }
          >
            About
          </Link>
          <Link
            href='/#registerHOA'
            _hover={{ color: '#E9C850' }}
            padding='10px'
            fontFamily='font.body'
            px='20px'
            onClick={() => handleLinkClick('facilities')}
            color={
              clickedLinkId === 'facilities'
                ? colors.selected
                : colors.unselected
            }
          >
            Register HOA
          </Link>
          <Link
            _hover={{ color: '#E9C850' }}
            padding='10px'
            fontFamily='font.body'
            px='20px'
            onClick={() => handleLinkClick('policies')}
            color={
              clickedLinkId === 'policies' ? colors.selected : colors.unselected
            }
          >
            Terms and Conditions
          </Link>
          <Link
            href='/#contactUs'
            _hover={{ color: '#E9C850' }}
            padding='10px'
            fontFamily='font.body'
            px='20px'
            onClick={() => handleLinkClick('contact us')}
            color={
              clickedLinkId === 'contact us'
                ? colors.selected
                : colors.unselected
            }
          >
            Contact Us
          </Link>
          <Link
            href='/admin/finance-management'
            _hover={{ color: '#E9C850' }}
            padding='10px'
            fontFamily='font.body'
            px='20px'
            onClick={() => handleLinkClick('test membership module')}
            color={
              clickedLinkId === 'test membership module'
                ? colors.selected
                : colors.unselected
            }
          >
            Test System Admin (Login)
          </Link>
        </HStack>
      </Show>
      <Spacer />
      <Show above='md'>
        <SignInButton />
      </Show>
    </Flex>
  )
}
