'use client'

import { EditIcon } from '@chakra-ui/icons'
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import EditProfileForm from './EditProfileForm'

export default function EditProfileButton () {
  // Form Title and instructions
  const formTitle = 'Edit Profile'
  const formInstructions =
    'Please fill out the following fields to edit your profile.'

  // Modal functions
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      {/* Button */}
      <Button colorScheme='yellow' onClick={() => onOpen()}>
        <Heading size='md' fontFamily={'font.body'}>
          Edit Profile
        </Heading>
        <EditIcon ml={'0.5rem'} />
      </Button>

      {/* Modal when button is clicked */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pt={'10px'} pb={'1.5rem'}>
          <ModalHeader>
            <ModalCloseButton />
            <Heading size='md' fontFamily={'font.heading'}>
              {formTitle}
            </Heading>
            <Text fontSize='sm' fontStyle={'italic'} fontFamily={'font.body'}>
              {formInstructions}
            </Text>
          </ModalHeader>
          <ModalBody>
            <EditProfileForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
