import { Flex, Box, Text } from "@chakra-ui/react";
import SIDEBAR from "../components/Sidebar";
import PAGETITLE from "../components/PageHeader";

function UserManagement() {
  return (
    <Flex id="userManagement">
      <SIDEBAR />
      <Flex flexDir={"column"} w="100%">
        <PAGETITLE title={"User Management"} />
        <Text color="black" />
        Table
      </Flex>
    </Flex>
  );
}
export default UserManagement;
