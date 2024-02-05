"use client";
import {
  Flex,
  Box,
  Text,
  HStack,
  Select,
  Spacer,
  Input,
  Stack,
} from "@chakra-ui/react";
import AssociationContactDirectoryTable from "../../../components/associationContactDirectory-components/AssociationContactDirectoryTable";

function AssociationContactDirectory() {
  return (
    <Box w="100rem" h="100rem">
      <Flex id="association-contact-directory">
        <Stack direction="row" w="100%">
          <HStack w="30%">
            <Select
              size="sm"
              fontFamily="font.body"
              placeholder="Filter Position"
              // value={selectedMemberType}
              // onChange={handleMemberTypeFilterChange}
            >
              {/* {membertype.map((option) => (
              <option key={option.value} value={option.value}>
                {option.MembetTypeCode}
              </option>
            ))} */}
              <option>President</option>
              <option>Vice President</option>
              <option>Secretary</option>
              <option>Treasurer</option>
            </Select>
            <Spacer />
            <Select
              size="sm"
              fontFamily="font.body"
              placeholder="Sort Name"
              // value={selectedMemberName}
              // onChange={handleMemberTypeFilterChange}
            >
              {/* {membername.map((option) => (
              <option key={option.value} value={option.value}>
                {option.MembetNameCode}
              </option>
            ))} */}
              <option>Ascending</option>
              <option>Descending</option>
            </Select>
          </HStack>
          <Spacer />
          <Stack align="flex-end" w="20%">
            <Input size="sm" type="string" placeholder="Search" />
          </Stack>
        </Stack>
      </Flex>
      <AssociationContactDirectoryTable />
    </Box>
  );
}
export default AssociationContactDirectory;
