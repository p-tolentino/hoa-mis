"use client";

import {
  Avatar,
  Box,
  Flex,
  Heading,
  ListItem,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import EditProfileButton from "../../components/myProfile-components/EditProfileButton";

export default function MyProfile() {
  return (
    <Box zIndex={1}>
      <Flex
        justifyContent={"space-between"}
        flexDir={{ md: "column", lg: "row" }}
      >
        {/* Profile Information */}
        <Flex gap="1.5rem">
          <Avatar size="2xl" src="avatar-1.jpg" />
          <Box mb={{ md: "2rem", lg: "0" }}>
            <Heading size="lg" fontFamily={"font.heading"}>
              John Doe
            </Heading>
            <Box fontFamily={"font.body"}>
              <Text fontSize={"24px"}>Admin | President</Text>
              <Text fontSize={"sm"} lineHeight={0.5} mt="1rem">
                Status:
              </Text>
              <Text fontSize={"24px"} color={"green"}>
                Active
              </Text>
            </Box>
          </Box>
        </Flex>
        {/* Edit Profile Button */}
        <EditProfileButton />
      </Flex>

      {/* Biography */}
      <Box mt="2rem">
        <Heading size="md" fontFamily={"font.heading"} mb={"1rem"}>
          Biography
        </Heading>
        <Text fontFamily={"font.body"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quia
          vitae adipisci quasi vel consequuntur, officiis magnam iusto repellat
          eaque deleniti quaerat atque autem culpa enim laborum et nobis quod
          quos? Atque adipisci consequatur veritatis doloremque fugit vero,
          consequuntur quisquam accusantium! Est, minus quae qui quia nobis eum,
          distinctio maiores ab ex repellendus blanditiis, architecto in aperiam
          officiis delectus dicta.
        </Text>
      </Box>

      <SimpleGrid
        columns={2}
        mt="3rem"
        spacing={10}
        minChildWidth={{ md: "35vw", lg: "20vw" }}
      >
        {/* Personal Information */}
        <Box>
          <Heading size="md" fontFamily={"font.heading"} mb={"1rem"}>
            Personal Information
          </Heading>
          <TableContainer>
            <Table w="35vw">
              <Tbody>
                <Tr>
                  <Td px={0} py={2} style={{ fontWeight: "bold" }}>
                    House No. & Street
                  </Td>
                  <Td px={0} py={2}>
                    00 Apple Street
                  </Td>
                </Tr>
                <Tr>
                  <Td px={0} py={2} style={{ fontWeight: "bold" }}>
                    Contact Number
                  </Td>
                  <Td px={0} py={2}>
                    0900 000 0000
                  </Td>
                </Tr>
                <Tr>
                  <Td px={0} py={2} style={{ fontWeight: "bold" }}>
                    Email Address
                  </Td>
                  <Td px={0} py={2}>
                    john.doe@gmail.com
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        {/* Interests & Hobbies */}
        <Box mt={{ md: "1rem", lg: "0" }}>
          <Heading size="md" fontFamily={"font.heading"} mb={"1rem"}>
            Interests & Hobbies
          </Heading>
          <UnorderedList spacing={2} fontFamily={"font.body"}>
            <ListItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores et suscipit cumque dolorem iste dolores atque
              dignissimos vel quae optio?
            </ListItem>
            <ListItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores et suscipit cumque dolorem iste dolores atque
              dignissimos vel quae optio?
            </ListItem>
            <ListItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores et suscipit cumque dolorem iste dolores atque
              dignissimos vel quae optio?
            </ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
