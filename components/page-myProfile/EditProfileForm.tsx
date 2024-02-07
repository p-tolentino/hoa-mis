'use client'

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'

export default function EditProfileForm ({
  biography,
  contactNumber
}: {
  biography: string
  contactNumber: string
}) {
  return (
    <>
      <FormControl fontFamily={'font.body'}>
        {/* Biography */}
        <FormLabel>Biography</FormLabel>
        <Textarea
          placeholder='Enter your biography here'
          maxLength={1300}
          rows={15}
          resize={'none'}
          defaultValue={biography}
        ></Textarea>
        <FormHelperText>Maximum of 1300 characters only.</FormHelperText>

        {/* Contact Number */}
        <FormLabel mt='1rem'>Contact Number</FormLabel>
        <Input type='tel' defaultValue={contactNumber}></Input>
      </FormControl>

      {/* Save Button */}
      <Button colorScheme='yellow' mt='2rem' fontFamily={'font.heading'}>
        Save
      </Button>
    </>
  )
}
