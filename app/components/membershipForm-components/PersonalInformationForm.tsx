'use client'
import { AddIcon } from '@chakra-ui/icons'
import {
  Input,
  FormControl,
  FormLabel,
  Flex,
  Grid,
  GridItem,
  IconButton
} from '@chakra-ui/react'

function PersonalInformationForm () {
  return (
    <Grid
      maxW='100rem'
      templateRows='repeat(4, 1fr)'
      templateColumns={'repeat(3, 1fr)'}
      gap={'2rem'}
      h='40vh'
    >
      {/* Full Name */}
      <GridItem colSpan={3}>
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Full Name:
          </FormLabel>
          <Flex gap='2rem'>
            {/* First Name */}
            <Input
              type='string'
              placeholder='First Name'
              fontSize='14px'
              fontFamily={'font.body'}
              size='md'
            />
            {/* Middle Name */}
            <Input
              type='string'
              placeholder='Middle Name'
              fontFamily={'font.body'}
              fontSize='14px'
              size='md'
            />
            {/* Last Name */}
            <Input
              type='string'
              placeholder='Last Name'
              fontFamily={'font.body'}
              fontSize='14px'
              size='md'
            />
          </Flex>
        </FormControl>
      </GridItem>

      {/* Date of Birth and ID Number*/}
      <GridItem>
        <Flex gap='1rem'>
          {/* Date of Birth */}
          <FormControl isRequired>
            <FormLabel fontSize='md' fontFamily='font.body'>
              Date of Birth
            </FormLabel>
            <Input
              isRequired
              type='date'
              placeholder='XXXXX'
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
          </FormControl>
        </Flex>
      </GridItem>
      <GridItem>
        {/* Contact Number */}
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Contact Number:
          </FormLabel>
          <Input
            type='number'
            placeholder='0900 000 0000'
            fontFamily='font.body'
            fontSize='14px'
            size='md'
          />
        </FormControl>
      </GridItem>
      <GridItem />
      {/* Plate Number of Vehicles */}
      <GridItem>
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Plate No. of vehicle/s owned/used and are parked in this HOA:
          </FormLabel>
          <Flex>
            <Input
              type='string'
              placeholder='Enter Plate No.'
              fontSize='14px'
              size='md'
            />
            <IconButton
              w='10'
              ml='20px'
              size='md'
              aria-label='Add Plate No.'
              icon={<AddIcon />}
            />
          </Flex>
        </FormControl>
      </GridItem>
    </Grid>
  )
}
export default PersonalInformationForm
