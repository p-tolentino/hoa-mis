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
import PersonalInformationForm from './_components/PersonalInformationForm'
import PropertyInformationForm from './_components/PropertyInformationForm'

function MembershipForm () {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index)
  }

  const progressValue = (selectedTabIndex + 1) * 50

  return (
    <Box h='80vh'>
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
              Property Information
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PersonalInformationForm />
            </TabPanel>
            <TabPanel>
              <PropertyInformationForm />
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                mt='5rem'
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
