'use client'

import {
  Text,
  Heading,
  Stack,
  Center,
  SimpleGrid,
  Box,
  Flex,
  Image
} from '@chakra-ui/react'
import Navbar from '@/components/navbar-components/Navbar'
import tempModuleIcon from '../public/tempModuleIcon.png'

function Homepage () {
  return (
    <Box>
      <Navbar />
      <Center
        h='30vh'
        bgSize={'cover'}
        bgImage={`url("/landscapeLowerOpacity.png")`}
      >
        <Flex bgColor={'rgba(255, 255, 255, 0.6)'}>
          <Stack
            direction={'column'}
            alignItems={'center'}
            textAlign={'center'}
            p='2rem'
          >
            <Heading size={'2xl'} fontFamily='font.heading'>
              System Name
            </Heading>
            <Text
              fontFamily='font.body'
              fontSize='1.5rem'
              textAlign={'center'}
              textShadow='1px 1px grey.05'
            >
              A Management Information System (MIS) for Homeowners' Associations
              in the Philippines.
            </Text>
          </Stack>
        </Flex>
      </Center>
      <SimpleGrid
        columns={4}
        spacing={5}
        mx={'3rem'}
        my={'2rem'}
        minChildWidth={{ md: '35vw', lg: '20vw' }}
      >
        <Stack
          direction={'column'}
          borderRadius={'1rem'}
          borderColor={'grey.05'}
          borderWidth={'2px'}
          minHeight='35vh'
          p='1rem'
          alignItems={'center'}
          textAlign={'center'}
        >
          <Image
            src='/tempModuleIcon.png'
            alt='Membership Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm' fontFamily='font.heading'>
            Membership
          </Heading>
          <Text fontSize={'14px'} fontFamily='font.body'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </Text>
        </Stack>
        <Stack
          direction={'column'}
          minW='20vw'
          borderRadius={'1rem'}
          borderColor={'grey.05'}
          borderWidth={'2px'}
          minHeight='35vh'
          p='1rem'
          alignItems={'center'}
          textAlign={'center'}
        >
          <Image
            src='/tempModuleIcon.png'
            alt='Membership Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm' fontFamily='font.heading'>
            Finance Management
          </Heading>
          <Text fontSize={'14px'} fontFamily='font.body'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </Text>
        </Stack>
        <Stack
          direction={'column'}
          minW='20vw'
          borderRadius={'1rem'}
          borderColor={'grey.05'}
          borderWidth={'2px'}
          minHeight='35vh'
          p='1rem'
          alignItems={'center'}
          textAlign={'center'}
        >
          <Image
            src='/tempModuleIcon.png'
            alt='Membership Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm' fontFamily='font.heading'>
            Community Engagement
          </Heading>
          <Text fontSize={'14px'} fontFamily='font.body'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </Text>
        </Stack>
        <Stack
          direction={'column'}
          minW='20vw'
          borderRadius={'1rem'}
          borderColor={'grey.05'}
          borderWidth={'2px'}
          minHeight='35vh'
          p='1rem'
          alignItems={'center'}
          textAlign={'center'}
        >
          <Image
            src='/tempModuleIcon.png'
            alt='Membership Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm' fontFamily='font.heading'>
            Dispute Resolution
          </Heading>
          <Text fontSize={'14px'} fontFamily='font.body'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </Text>
        </Stack>
        <Stack
          direction={'column'}
          minW='20vw'
          borderRadius={'1rem'}
          borderColor={'grey.05'}
          borderWidth={'2px'}
          minHeight='35vh'
          p='1rem'
          alignItems={'center'}
          textAlign={'center'}
        >
          <Image
            src='/tempModuleIcon.png'
            alt='Membership Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm' fontFamily='font.heading'>
            Violation Monitoring
          </Heading>
          <Text fontSize={'14px'} fontFamily='font.body'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </Text>
        </Stack>
        <Stack
          direction={'column'}
          minW='20vw'
          borderRadius={'1rem'}
          borderColor={'grey.05'}
          borderWidth={'2px'}
          minHeight='35vh'
          p='1rem'
          alignItems={'center'}
          textAlign={'center'}
        >
          <Image
            src='/tempModuleIcon.png'
            alt='Membership Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm' fontFamily='font.heading'>
            Facility Reservation
          </Heading>
          <Text fontSize={'14px'} fontFamily='font.body'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </Text>
        </Stack>
        <Stack
          direction={'column'}
          minW='20vw'
          borderRadius={'1rem'}
          borderColor={'grey.05'}
          borderWidth={'2px'}
          minHeight='35vh'
          p='1rem'
          alignItems={'center'}
          textAlign={'center'}
        >
          <Image
            src='/tempModuleIcon.png'
            alt='Membership Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm' fontFamily='font.heading'>
            Maintenance Handling
          </Heading>
          <Text fontSize={'14px'} fontFamily='font.body'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </Text>
        </Stack>
        <Stack
          direction={'column'}
          minW='20vw'
          borderRadius={'1rem'}
          borderColor={'grey.05'}
          borderWidth={'2px'}
          minHeight='35vh'
          p='1rem'
          alignItems={'center'}
          textAlign={'center'}
        >
          <Image
            src='/tempModuleIcon.png'
            alt='Membership Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm' fontFamily='font.heading'>
            Election Management
          </Heading>
          <Text fontSize={'14px'} fontFamily='font.body'>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  )
}
export default Homepage
