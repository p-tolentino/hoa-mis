'use client'
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  RadioGroup,
  HStack,
  Radio,
  Select,
  Input,
  FormHelperText
} from '@chakra-ui/react'
import { useState } from 'react'

function PropertyInformationForm () {
  const [homeownerType, setHomeownerType] = useState('Homeowner')

  return (
    <Grid
      maxW='100rem'
      templateRows='repeat(4, 1fr)'
      templateColumns={'repeat(3, 1fr)'}
      gap={'2rem'}
      h='40vh'
    >
      {/* What type of homeowner are you? */}
      <GridItem colSpan={3} mt='1rem'>
        <FormControl>
          <FormLabel fontSize='md' fontFamily={'font.body'} w='30%'>
            What type of homeowner are you?
          </FormLabel>
          <RadioGroup
            defaultValue='Homeowner'
            colorScheme='yellow'
            fontFamily='font.body'
            fontSize='md'
            onChange={value => setHomeownerType(value)}
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
          <Select variant='filled' mb={'2rem'}>
            <option value={'address1'}>Address 1</option>
            <option value={'address2'}>Address 2</option>
            <option value={'address3'}>Address 3</option>
          </Select>
        </FormControl>
      </GridItem>

      {/* Lot Number */}
      <GridItem>
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Lot Number:
          </FormLabel>
          <Input
            type='number'
            fontFamily='font.body'
            placeholder='XXX'
            fontSize='14px'
            size='md'
          />
        </FormControl>
      </GridItem>

      {/* Lot Size */}
      <GridItem>
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Lot Size (in sqm.):
          </FormLabel>
          <Input
            type='number'
            fontFamily='font.body'
            placeholder='XXXXXX'
            fontSize='14px'
            size='md'
          />
        </FormControl>
      </GridItem>

      {/* Purchase Date */}
      <GridItem>
        <FormControl isRequired>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Purchase Date:
          </FormLabel>
          <Input
            type='date'
            fontFamily='font.body'
            placeholder='XXXXX'
            fontSize='14px'
            size='md'
          />
        </FormControl>
      </GridItem>

      {/* Property Documents */}
      {homeownerType === 'Homeowner' && (
        <GridItem>
          <FormControl isRequired>
            <FormLabel fontSize='md' fontFamily='font.body'>
              Land Title
            </FormLabel>
            <Input type='file' fontFamily='font.body' h='100px' />
            <FormHelperText>(For Homeowners and Lot Owners)</FormHelperText>
          </FormControl>
        </GridItem>
      )}
      {homeownerType === 'Tenant' && (
        <GridItem>
          <FormControl isRequired>
            <FormLabel fontSize='md' fontFamily='font.body'>
              Lease Contract:
            </FormLabel>
            <Input type='file' fontFamily='font.body' h='100px' />
            <FormHelperText>(For Tenants)</FormHelperText>
          </FormControl>
        </GridItem>
      )}

      {/* Other Property Document 1 */}
      <GridItem>
        <FormControl>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Other Property Document 1:
          </FormLabel>
          <Input type='file' fontFamily='font.body' h='100px' />
        </FormControl>
      </GridItem>

      {/* Other Property Document 2 */}
      <GridItem>
        <FormControl>
          <FormLabel fontSize='md' fontFamily='font.body'>
            Other Property Document 2 :
          </FormLabel>
          <Input type='file' fontFamily='font.body' h='100px' />
        </FormControl>
      </GridItem>
    </Grid>
  )
}
export default PropertyInformationForm
