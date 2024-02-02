import {
  Flex,
  Card,
  CardBody,
  Heading,
  Button,
  ButtonGroup
  // Accordion,
  // AccordionItem,
  // AccordionButton,
  // AccordionIcon,
  // Box,
  // AccordionPanel
} from '@chakra-ui/react'

export default function ModuleMenu () {
  return (
    <Flex p='8' gap={'2rem'}>
      {/* <Accordion defaultIndex={[0]} allowMultiple w='25wh'>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion> */}
      <Flex flexDir={'column'}>
        <Heading size='md' mb='1rem'>
          Admin
        </Heading>
        <Card w='25vw' h='max-content' pb='1.5rem'>
          <CardBody>
            <ButtonGroup flexDir={'column'} gap={'0.5rem'} width={'100%'}>
              <Button>List of Users</Button>
              <Button>Admin Directory</Button>
              <Button>Homeowner Directory</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
      <Flex flexDir={'column'}>
        <Heading size='md' mb='1rem'>
          Property Management
        </Heading>
        <Card w='25vw' h='max-content' pb='1.5rem'>
          <CardBody>
            <ButtonGroup flexDir={'column'} gap={'0.5rem'} width={'100%'}>
              <Button>List of House Lots</Button>
              <Button>House Lot Documents</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
      <Flex flexDir={'column'}>
        <Heading size='md' mb='1rem'>
          User Registration
        </Heading>
        <Card w='25vw' h='max-content' pb='1.5rem'>
          <CardBody>
            <ButtonGroup flexDir={'column'} gap={'0.5rem'} width={'100%'}>
              <Button>Membership Card (Tenant)</Button>
              <Button>Membership Card (Resident)</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  )
}
