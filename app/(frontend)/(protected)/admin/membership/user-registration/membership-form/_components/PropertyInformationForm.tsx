'use client'
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  RadioGroup,
  HStack,
  Radio,
  Select
} from '@chakra-ui/react'

function PropertyInformationForm () {
  return (
    <Grid
      maxW='100rem'
      templateRows='repeat(4, 1fr)'
      templateColumns={'repeat(3, 1fr)'}
      gap={'2rem'}
      h='40vh'
    >
      {/* What type of homeowner are you? */}
      <GridItem colSpan={3} my='1rem'>
        <FormControl>
          <FormLabel fontSize='md' fontFamily={'font.body'} w='30%'>
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
              <Radio value='Tenant' size='md'>
                Tenant
              </Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </GridItem>

      {/* Complete Home Address */}
      <GridItem colSpan={3}>
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Complete Home Address:
          </FormLabel>
          <Select variant='filled'>
            <option value={'address1'}>Address 1</option>
            <option value={'address2'}>Address 2</option>
            <option value={'address3'}>Address 3</option>
          </Select>
        </FormControl>
      </GridItem>
    </Grid>
  )
}
export default PropertyInformationForm
