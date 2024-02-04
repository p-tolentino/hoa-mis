'use client'

import {
  Flex,
  Card,
  CardBody,
  Heading,
  Button,
  ButtonGroup
} from '@chakra-ui/react'

export default function MembershipModuleMenu () {
  return (
    <Flex p='8' gap={'2rem'} wrap={'wrap'}>
      <Flex flexDir={'column'}>
        <Heading size='md' mb='1rem' fontFamily='font.heading'>
          Admin
        </Heading>
        <Card minW='20vw' h='max-content' pb='1.5rem'>
          <CardBody>
            <ButtonGroup
              flexDir={'column'}
              gap={'0.5rem'}
              minW={'100%'}
              fontFamily='font.body'
            >
              <Button as='a' href='/system-admin/membership/user-management'>
                User Management
              </Button>
              <Button>Admin Directory</Button>
              <Button>Homeowner Directory</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
      <Flex flexDir={'column'}>
        <Heading size='md' mb='1rem' fontFamily='font.heading'>
          Property Management
        </Heading>
        <Card minW='20vw' h='max-content' pb='1.5rem'>
          <CardBody>
            <ButtonGroup
              flexDir={'column'}
              gap={'0.5rem'}
              minW={'100%'}
              fontFamily='font.body'
            >
              <Button>List of House Lots</Button>
              <Button>House Lot Documents</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
      <Flex flexDir={'column'}>
        <Heading size='md' mb='1rem' fontFamily='font.heading'>
          User Registration
        </Heading>
        <Card minW='20vw' h='max-content' pb='1.5rem'>
          <CardBody>
            <ButtonGroup
              flexDir={'column'}
              gap={'0.5rem'}
              minW={'100%'}
              fontFamily='font.body'
            >
              <Button>Membership Card (Tenant)</Button>
              <Button>Membership Card (Resident)</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  )
}
