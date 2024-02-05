'use client'
import { useState } from 'react'
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Progress,
  Button
} from '@chakra-ui/react'
import PersonalInformationForm from '@/app/components/membershipForm-components/PersonalInformationForm'
import VehicleInformationForm from '@/app/components/membershipForm-components/VehicleInformationForm'

function MembershipForm () {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index)
  }

  const progressValue = (selectedTabIndex + 1) * 50

  return (
    <Box maxW='100rem' h='80vh'>
      <Flex id='user-registration'>
        <Tabs w='100%' h='70vh' variant='enclosed' onChange={handleTabChange}>
          <TabList>
            <Tab
              fontSize='sm'
              fontFamily='font.heading'
              fontWeight='700'
              color='brand.500'
            >
              Personal Information
            </Tab>
            <Tab
              fontSize='sm'
              fontFamily='font.heading'
              fontWeight='700'
              color='brand.500'
            >
              Vehicle Information
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PersonalInformationForm />
            </TabPanel>
            <TabPanel>
              <VehicleInformationForm />
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                mt='30px'
              >
                <Button
                  type='submit'
                  colorScheme='yellow'
                  borderRadius='10'
                  fontFamily='font.body'
                  fontWeight='800'
                >
                  Submit Form
                </Button>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Progress colorScheme='green' value={progressValue} />
    </Box>
  )
}
export default MembershipForm
