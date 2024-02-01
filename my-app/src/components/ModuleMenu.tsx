import {
  Flex,
  Card,
  CardBody,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export default function () {
  return (
    <Flex p="8" gap={"2rem"}>
      <Flex flexDir={"column"}>
        <Heading size="md" mb="1rem" fontFamily="montserrat variable">
          Admin
        </Heading>
        <Card w="30vw" h="max-content" pb="1.5rem">
          <CardBody>
            <ButtonGroup flexDir={"column"} gap={"0.5rem"} width={"100%"}>
              <Button fontFamily="cabin variable">List of Users</Button>
              <Button fontFamily="cabin variable">Admin Directory</Button>
              <Button fontFamily="cabin variable">Homeowner Directory</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading size="md" mb="1rem" fontFamily="montserrat variable">
          Property Management
        </Heading>
        <Card w="30vw" h="max-content" pb="1.5rem">
          <CardBody>
            <ButtonGroup flexDir={"column"} gap={"0.5rem"} width={"100%"}>
              <Button fontFamily="cabin variable">List of House Lots</Button>
              <Button fontFamily="cabin variable">House Lot Documents</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}
