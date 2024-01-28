import {
  Text,
  Heading,
  Stack,
  Center,
  SimpleGrid,
  Box,
  Image
} from '@chakra-ui/react'
// import Image from "next/image";
import landscapeLowerOpacity from '../images/landscapeLowerOpacity.png'
import tempModuleIcon from '../images/tempModuleIcon.png'
function AboutUs () {
  return (
    <Box>
      <Center bgImage={landscapeLowerOpacity} h='30vh' bgSize={'cover'}>
        <Stack
          direction={'column'}
          alignItems={'center'}
          textAlign={'center'}
          p='2rem'
        >
          <Heading size={'2xl'}>System Name</Heading>
          <Text
            fontSize='1rem'
            textAlign={'center'}
            textShadow='1px 1px grey.05'
          >
            A Management Information System (MIS) for Homeowners' Associations
            in the Philippines.
          </Text>
        </Stack>
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
            src={tempModuleIcon}
            alt='Membership Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm'>Membership Module</Heading>
          <Text fontSize={'14px'}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
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
            src={tempModuleIcon}
            alt='Finance Management Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm'>Finance Management Module</Heading>
          <Text fontSize={'14px'}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
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
            src={tempModuleIcon}
            alt='Community Engagement Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm'>Community Engagement Module</Heading>
          <Text fontSize={'14px'}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
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
            src={tempModuleIcon}
            alt='Dispute Resolution'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm'>Dispute Resolution Module</Heading>
          <Text fontSize={'14px'}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
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
            src={tempModuleIcon}
            alt='Violation Monitoring Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm'>Violation Monitoring Module</Heading>
          <Text fontSize={'14px'}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
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
            src={tempModuleIcon}
            alt='Facility Reservation Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm'>Facility Reservation Module</Heading>
          <Text fontSize={'14px'}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
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
            src={tempModuleIcon}
            alt='Maintenance Handling Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm'>Maintenance Handling Module</Heading>
          <Text fontSize={'14px'}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
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
            src={tempModuleIcon}
            alt='Election Management Module'
            boxSize={'5rem'}
          ></Image>
          <Heading size='sm'>Election Management Module</Heading>
          <Text fontSize={'14px'}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  )
}
export default AboutUs
