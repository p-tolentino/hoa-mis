'use client'

import {
  Flex,
  Card,
  CardBody,
  Heading,
  Button,
  ButtonGroup,
  Stack,
  Spacer,
  Box,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'

export default function MembershipModuleMenu () {
  return (
    <Flex p='1rem' gap='5rem'>
      {/* Admin Functions */}
      <Box mb='3rem'>
        <Heading size='md' mb='1rem' fontFamily='font.heading'>
          Admin
        </Heading>
        <Card maxW='30vw' h='max-content' pb='1.5rem' shadow='md'>
          <CardBody>
            <ButtonGroup
              flexDir={'column'}
              gap={'0.5rem'}
              minW={'100%'}
              fontFamily='font.body'
            >
              {/* User Management */}
              <Button
                fontSize={'lg'}
                fontWeight='400'
                bgColor='brand.300'
                _hover={{
                  bgColor: '#fcdf86',
                  transform: 'scale(1.02)',
                  fontWeight: 'semibold'
                }}
                as={Link}
                href='/system-admin/membership/user-management'
              >
                User Management
              </Button>
              <Text size={'sm'} mb='2rem'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                quo veritatis repudiandae amet deserunt pariatur?
              </Text>

              {/* Association Contact Directory */}
              <Button
                fontSize={'lg'}
                fontWeight='400'
                bgColor='brand.300'
                _hover={{
                  bgColor: '#fcdf86',
                  transform: 'scale(1.02)',
                  fontWeight: 'semibold'
                }}
                as={Link}
                href='/system-admin/membership/association-contact-directory'
              >
                Association Contact Directory
              </Button>
              <Text size={'sm'}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                quo veritatis repudiandae amet deserunt pariatur?
              </Text>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Box>
      <Box>
        {/* Property Management */}
        <Box mb='3rem'>
          <Heading size='md' mb='1rem' fontFamily='font.heading'>
            Property Management
          </Heading>
          <Card maxW='30vw' h='max-content' pb='1.5rem' shadow='md'>
            <CardBody>
              <ButtonGroup
                flexDir={'column'}
                gap={'0.5rem'}
                minW={'100%'}
                fontFamily='font.body'
              >
                <Button
                  fontSize={'lg'}
                  fontWeight='400'
                  bgColor='brand.300'
                  _hover={{
                    bgColor: '#fcdf86',
                    transform: 'scale(1.02)',
                    fontWeight: 'semibold'
                  }}
                  as={Link}
                  href={'/system-admin/membership/property-management'}
                >
                  Browse House Lots (Map)
                </Button>
                <Text size={'sm'}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Modi, quo veritatis repudiandae amet deserunt pariatur?
                </Text>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Box>

        {/* User Registration */}
        <Box>
          <Heading size='md' mb='1rem' fontFamily='font.heading'>
            User Registration
          </Heading>
          <Card maxW='30vw' h='max-content' pb='1.5rem' shadow='md'>
            <CardBody>
              <ButtonGroup
                flexDir={'column'}
                gap={'0.5rem'}
                minW={'100%'}
                fontFamily='font.body'
              >
                <Button
                  fontSize={'lg'}
                  fontWeight='400'
                  bgColor='brand.300'
                  _hover={{
                    bgColor: '#fcdf86',
                    transform: 'scale(1.02)',
                    fontWeight: 'semibold'
                  }}
                  as={Link}
                  href='/system-admin/membership/membership-card'
                >
                  Membership Form
                </Button>
                <Text size={'sm'}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Modi, quo veritatis repudiandae amet deserunt pariatur?
                </Text>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Flex>
  )
}
