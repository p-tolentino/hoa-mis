'use client'

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'

export default function EditProfileForm () {
  return (
    <>
      <FormControl fontFamily={'font.body'}>
        {/* Biography */}
        <FormLabel>Biography</FormLabel>
        <Textarea
          placeholder='Enter your biography here'
          resize={'none'}
        ></Textarea>

        {/* Contact Number */}
        <FormLabel mt='1rem'>Contact Number</FormLabel>
        <Input type='tel' placeholder='09XX XXX XXXX'></Input>

        {/* Interests & Hobbies */}
        <FormLabel mt='1rem'>Interests & Hobbies</FormLabel>
        <Textarea
          placeholder='Enter your interests and hobbies here'
          resize={'none'}
        ></Textarea>
        <FormHelperText fontSize={'sm'} fontStyle={'italic'}>
          Note: To improve readability, each sentence will be transformed into a
          bullet point.
        </FormHelperText>
      </FormControl>

      {/* Save Button */}
      <Button colorScheme='yellow' mt='2rem' fontFamily={'font.heading'}>
        Save
      </Button>
    </>
  )
}
