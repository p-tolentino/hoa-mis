import { Box, Flex } from "@chakra-ui/react";
import SIDEBAR from "../components/Sidebar";
import PAGETITLE from "../components/PageHeader";
// import MODULEMENU from '../pages/ModuleMenu'
import MyProfile from "../pages/MyProfile";
// import PropertyManagement from '../pages/PropertManagement'
import UserManagement from "../pages/UserManagement";

const SystemLayout = () => (
  <Flex>
    <SIDEBAR />
    <Flex flexDir={"column"} w="100%">
      {/* <PAGETITLE title={"My Profile"} /> */}
      <PAGETITLE title={"User Management"} />
      <Box p="6">
        {/* <MyProfile /> */}
        <UserManagement />
      </Box>
    </Flex>
  </Flex>
);

export default SystemLayout;
