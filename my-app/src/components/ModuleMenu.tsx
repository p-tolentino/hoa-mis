import {
  Flex,
  Card,
  CardBody,
  Heading,
  Button,
  ButtonGroup
} from '@chakra-ui/react'

export default function () {
  return (
    <Flex p='8' gap={'2rem'}>
      <Flex flexDir={'column'}>
        <Heading size='md' mb='1rem'>
          Admin
        </Heading>
        <Card w='30vw' h='max-content' pb='1.5rem'>
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
        <Card w='30vw' h='max-content' pb='1.5rem'>
          <CardBody>
            <ButtonGroup flexDir={'column'} gap={'0.5rem'} width={'100%'}>
              <Button>List of House Lots</Button>
              <Button>House Lot Documents</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  )
}
