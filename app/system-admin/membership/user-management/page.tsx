"use client";
import { Flex, Box, Text, HStack, Select, Spacer } from "@chakra-ui/react";
import UserManagementTable from "../../../components/userManagement-components/UserManagementTable";

function UserManagement() {
  return (
    <Box w="100rem" h="100rem">
      <Flex id="user-management">
        <HStack w="30%">
          <Select
            size="sm"
            fontFamily="font.body"
            placeholder="Filter Member Type"
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
            <option>Resident</option>
            <option>Tenant</option>
          </Select>
          <Spacer />
          <Select
            size="sm"
            fontFamily="font.body"
            placeholder="Sort Member Name"
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
      </Flex>
      <UserManagementTable />
    </Box>
  );
}
export default UserManagement;
