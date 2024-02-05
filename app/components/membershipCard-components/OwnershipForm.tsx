'use client'
import {
  FormControl,
  Stack,
  Spacer,
  RadioGroup,
  HStack,
  Radio,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Box
} from '@chakra-ui/react'

function OwnershipForm () {
  return (
    <>
      <FormControl>
        {/* What type of homeowner are you? */}
        <FormLabel fontSize='md' fontFamily={'font.body'}>
          What type of homeowner are you?
        </FormLabel>
        <RadioGroup
          defaultValue='Homeowner'
          colorScheme='yellow'
          fontFamily='font.body'
          fontSize='md'
        >
          <HStack spacing='24px'>
            <Radio value='Homeowner' size='md'>
              Homeowner
            </Radio>
            <Radio value='Lot Owner' size='md'>
              Lot Owner
            </Radio>
            <Radio value='Tenant' size='md'>
              Tenant
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      {/* For Homeowerns Only */}
      <Box>
        <FormLabel mt='1rem' fontSize={'sm'} fontFamily={'font.body'}>
          For Homeowners only:
        </FormLabel>
        <CheckboxGroup colorScheme='yellow'>
          <Stack spacing='1' direction='column'>
            <Checkbox
              value='Own Use'
              size='md'
              fontSize='md'
              fontFamily='font.body'
            >
              Own Use
            </Checkbox>
            <Checkbox
              value='For Rent'
              size='md'
              fontSize='md'
              fontFamily='font.body'
            >
              For Rent
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
    </>
  )
}
export default OwnershipForm
