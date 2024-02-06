"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
  Box,
  Text,
  Stack,
  Avatar,
  HStack,
  Table,
  Tbody,
  Tr,
  Td,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const ViewMemberDetailsButton = () => {
  const action = "Member Information";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = [
    {
      houseNoStreet: "House No. & Street:",
      numName: "00 Apple Street",
      contactNumber: "Contact Number",
      number: "0900 000 0000",
      cNlink: "tel:+63-900-000-0000",
      emailAddress: "Email Address",
      email: "john.doe@gmail.com",
      eAlink: "mailto:john.doe@gmail.com",
    },
  ];

  return (
    <>
      <Button
        fontFamily="font.body"
        onClick={() => onOpen()}
        key={action}
        colorScheme="green"
        variant="ghost"
        size="sm"
      >
        {action}
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt="10px">
            <Heading size="md" fontFamily="font.heading">
              {action}
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={5} paddingRight="20px">
              <Box w="100%" h="100%" p="20px">
                <HStack>
                  <Avatar size="2xl" src="avatar-1.jpg" />
                  <Box ml="10px">
                    <Heading size="lg" fontFamily="font.heading">
                      John Doe
                    </Heading>
                    <Box fontFamily="font.body">
                      <Text fontSize="24px">Admin | President</Text>
                      <Text fontSize="sm" lineHeight="0.5" mt="1rem">
                        Status:
                      </Text>
                      <Text fontSize="24px" color="green">
                        Active
                      </Text>
                    </Box>
                  </Box>
                </HStack>
              </Box>

              <Box w="100%" h="100%" p="10px">
                <Box w="100%" h="100%" p="5">
                  <Heading size="md" fontFamily={"font.heading"} mb={"1rem"}>
                    Biography
                  </Heading>
                  <Text fontFamily="font.body" textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, quia vitae adipisci quasi vel consequuntur, officiis
                    magnam iusto repellat eaque deleniti quaerat atque autem
                  </Text>
                </Box>

                <Box w="100%" h="100%" p="5">
                  <Heading size="md" fontFamily={"font.heading"} mb={"1rem"}>
                    Personal Information
                  </Heading>
                  <Text>
                    <Table>
                      <Tbody>
                        {data.map((val, i) => (
                          <Tr key={i} fontFamily="font.body">
                            <Td
                              px={3}
                              py={1}
                              fontFamily="font.body"
                              style={{ fontWeight: "bold" }}
                            >
                              {val.houseNoStreet}
                            </Td>
                            <Td px={0} py={1} fontFamily="font.body">
                              {val.numName}
                            </Td>
                          </Tr>
                        ))}
                        {data.map((val, i) => (
                          <Tr key={i} fontFamily="font.body">
                            <Td
                              px={3}
                              py={1}
                              fontFamily="font.body"
                              style={{ fontWeight: "bold" }}
                            >
                              {val.contactNumber}
                            </Td>
                            <Td px={0} py={1} fontFamily="font.body">
                              <a href={val.cNlink} target="_blank">
                                {val.number}
                              </a>
                            </Td>
                          </Tr>
                        ))}
                        {data.map((val, i) => (
                          <Tr key={i} fontFamily="font.body">
                            <Td
                              px={3}
                              py={1}
                              fontFamily="font.body"
                              style={{ fontWeight: "bold" }}
                            >
                              {val.emailAddress}
                            </Td>
                            <Td px={0} py={1} fontFamily="font.body">
                              <a href={val.eAlink} target="_blank">
                                {val.email}
                              </a>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Text>
                </Box>

                <Box w="100%" h="100%" p="5">
                  <Heading size="md" fontFamily={"font.heading"} mb={"1rem"}>
                    Interests & Hobbies
                  </Heading>
                  <UnorderedList
                    spacing={2}
                    fontFamily="font.body"
                    px="15px"
                    textAlign="justify"
                  >
                    <ListItem>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </ListItem>
                    <ListItem>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </ListItem>
                    <ListItem>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default ViewMemberDetailsButton;