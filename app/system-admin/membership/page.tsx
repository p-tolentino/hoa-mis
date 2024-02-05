"use client";

import {
  Flex,
  Card,
  CardBody,
  Heading,
  Button,
  ButtonGroup,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";

export default function MembershipModuleMenu() {
  // const membershipMenu_categories = ['Property Management', 'User Registration']
  // const admin_buttons = ['User Management', 'Homeowner Contact Directory']
  // const propertyManagement_buttons = ['Browse House Lots (Map)']
  // const userRegistration_buttons = ['Membershsip Card']

  return (
    <Flex p="10" w="100%" gap="10rem">
      <Flex flexDir={"column"}>
        <Heading size="md" mb="1rem" fontFamily="font.heading">
          Admin
        </Heading>

        <Card minW="20vw" h="max-content" pb="1.5rem" shadow="md">
          <CardBody>
            <ButtonGroup
              flexDir={"column"}
              gap={"0.5rem"}
              minW={"100%"}
              fontFamily="font.body"
            >
              <Stack>
                <Button
                  fontWeight="400"
                  variant="outline"
                  _hover={{ bgColor: "brand.300", fontWeight: "semibold" }}
                  as="a"
                  href="/system-admin/membership/user-management"
                >
                  User Management
                </Button>
                <Button
                  fontWeight="400"
                  variant="outline"
                  _hover={{ bgColor: "brand.300", fontWeight: "semibold" }}
                  as="a"
                  href="/system-admin/membership/association-contact-directory"
                >
                  Association Contact Directory
                </Button>
              </Stack>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading size="md" mb="1rem" fontFamily="font.heading">
          Property Management
        </Heading>
        <Card minW="20vw" h="max-content" pb="1.5rem" shadow="md">
          <CardBody>
            <ButtonGroup
              flexDir={"column"}
              gap={"0.5rem"}
              minW={"100%"}
              fontFamily="font.body"
            >
              <Button
                fontWeight="400"
                variant="outline"
                _hover={{ bgColor: "brand.300", fontWeight: "semibold" }}
                as={Link}
                href={"/system-admin/membership/property-management"}
              >
                Browse House Lots (Map)
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading size="md" mb="1rem" fontFamily="font.heading">
          User Registration
        </Heading>
        <Card minW="20vw" h="max-content" pb="1.5rem" shadow="md">
          <CardBody>
            <ButtonGroup
              flexDir={"column"}
              gap={"0.5rem"}
              minW={"100%"}
              fontFamily="font.body"
            >
              <Button
                fontWeight="400"
                variant="outline"
                _hover={{ bgColor: "brand.300", fontWeight: "semibold" }}
                as="a"
                href="/system-admin/membership/membership-form"
              >
                Membership Card
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}
