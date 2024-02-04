"use client";

import {
  Flex,
  Card,
  CardBody,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export default function MembershipModuleMenu() {
  return (
    <Flex p="8" gap={"2rem"}>
      <Flex flexDir={"column"}>
        <Heading size="md" mb="1rem" fontFamily="font.heading">
          Admin
        </Heading>
        <Card w="25vw" h="max-content" pb="1.5rem">
          <CardBody>
            <ButtonGroup
              flexDir={"column"}
              gap={"0.5rem"}
              width={"100%"}
              fontFamily="font.body"
            >
              <Button as="a" href="/system-admin/membership/user-management">
                User Management
              </Button>
              <Button
                as="a"
                href="/system-admin/membership/association-contact-directory"
              >
                Association Contact Directory
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading size="md" mb="1rem" fontFamily="font.heading">
          Property Management
        </Heading>
        <Card w="25vw" h="max-content" pb="1.5rem">
          <CardBody>
            <ButtonGroup
              flexDir={"column"}
              gap={"0.5rem"}
              width={"100%"}
              fontFamily="font.body"
            >
              <Button>List of House Lots</Button>
              <Button>House Lot Documents</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading size="md" mb="1rem" fontFamily="font.heading">
          User Registration
        </Heading>
        <Card w="25vw" h="max-content" pb="1.5rem">
          <CardBody>
            <ButtonGroup
              flexDir={"column"}
              gap={"0.5rem"}
              width={"100%"}
              fontFamily="font.body"
            >
              <Button as="a" href="/system-admin/membership/membership-card">
                Membership Card
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}
