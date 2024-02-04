'use client'

import {
  Button,
  FormControl,
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
      </FormControl>

      {/* Save Button */}
      <Button colorScheme='yellow' mt='2rem' fontFamily={'font.heading'}>
        Save
      </Button>
    </>
  )
}
