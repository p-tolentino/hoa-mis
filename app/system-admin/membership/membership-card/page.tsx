"use client";
import { useState } from "react";
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Progress,
} from "@chakra-ui/react";
import OwnershipForm from "../../../components/membershipCard-components/OwnershipForm";
import PersonalInformationForm from "../../../components/membershipCard-components/PersonalInformationForm";
import VehicleInformationForm from "../../../components/membershipCard-components/VehicleInformationForm";

function UserRegistration() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);
  };

  const progressValue = (selectedTabIndex + 1) * 33.33;

  return (
    <Box w="100rem" h="80vh">
      <Flex id="user-registration">
        <Tabs w="100rem" h="70vh" variant="enclosed" onChange={handleTabChange}>
          <TabList>
            <Tab
              fontSize="sm"
              fontFamily="font.heading"
              fontWeight="700"
              color="brand.500"
            >
              Ownership
            </Tab>
            <Tab
              fontSize="sm"
              fontFamily="font.heading"
              fontWeight="700"
              color="brand.500"
            >
              Personal Information
            </Tab>
            <Tab
              fontSize="sm"
              fontFamily="font.heading"
              fontWeight="700"
              color="brand.500"
            >
              Vehicle Information
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <OwnershipForm />
            </TabPanel>
            <TabPanel>
              <PersonalInformationForm />
            </TabPanel>
            <TabPanel>
              <VehicleInformationForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Progress colorScheme="green" value={progressValue} />
    </Box>
  );
}
export default UserRegistration;
