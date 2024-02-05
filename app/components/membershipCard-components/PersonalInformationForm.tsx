'use client'
import {
  Input,
  FormControl,
  FormLabel,
  Flex,
  Grid,
  GridItem
} from '@chakra-ui/react'

function PersonalInformationForm () {
  return (
    <Grid
      templateRows='repeat(4, 1fr)'
      templateColumns={'repeat(5, 1fr)'}
      gap={'2rem'}
      h='40vh'
    >
      {/* Full Name */}
      <GridItem colSpan={3}>
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Full Name:
          </FormLabel>
          <Flex gap='1rem'>
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

      {/* Upload ID */}
      <GridItem colSpan={2} rowSpan={4}>
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Upload ID:
          </FormLabel>
          <Input type='file' h='400px' textAlign={'center'}></Input>
        </FormControl>
      </GridItem>

      {/* Date of Birth and ID Number*/}
      <GridItem colSpan={3}>
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
          {/* ID Number */}
          <FormControl>
            <FormLabel fontSize='md' fontFamily='font.body'>
              ID No. Issued:
            </FormLabel>
            <Input
              isRequired
              type='number'
              placeholder='XXXXX'
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
          </FormControl>
        </Flex>
      </GridItem>

      {/* Complete Home Address */}
      <GridItem colSpan={3}>
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Complete Home Address:
          </FormLabel>
          <Flex gap={'1rem'}>
            {/* House Number */}
            <Input
              type='string'
              placeholder='House No.'
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
            {/* Street Name */}
            <Input
              type='string'
              placeholder='Street Name'
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
            {/* Barangay Number */}
            <Input
              type='string'
              placeholder='Barangay No.'
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
          </Flex>
          <Flex gap={'1rem'} mt='1rem'>
            {/* City / Municipality */}
            <Input
              type='string'
              placeholder='City/Municipality'
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
            {/* Region */}
            <Input
              type='string'
              placeholder='Region'
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
            {/* Postal Code */}
            <Input
              type='string'
              placeholder='Postal Code'
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
          </Flex>
        </FormControl>
      </GridItem>

      {/* Personal Info */}
      <GridItem colSpan={3}>
        <Flex gap='1rem'>
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
          {/* Email Address */}
          <FormControl isRequired>
            <FormLabel fontSize='md' fontFamily='font.body'>
              Email Address:
            </FormLabel>
            <Input
              type='email'
              placeholder='email.address@gmail.com'
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
          </FormControl>
          {/* Religion */}
          <FormControl isRequired>
            <FormLabel fontSize='md' fontFamily='font.body'>
              Religion:
            </FormLabel>
            <Input
              type='string'
              placeholder=''
              fontFamily='font.body'
              fontSize='14px'
              size='md'
            />
          </FormControl>
        </Flex>
      </GridItem>
    </Grid>
  )
}
export default PersonalInformationForm
