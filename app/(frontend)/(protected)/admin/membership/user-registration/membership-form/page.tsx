'use client'
import { useState } from 'react'
import React, { ChangeEvent } from 'react';
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
import { submit } from '@/backend/actions/submitForm'

function MembershipForm () {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index)
  }

  const progressValue = (selectedTabIndex + 1) * 50

  const [data, setData] = useState({
    first: '',
    middle: '',
    last: '',
    phone: '',
    birth: '',
    vehicles: [{ plate: '' }],
    type: 'Homeowner',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange2 = (e: ChangeEvent<HTMLInputElement> | string) => {
    let name:string, value: string;
  
    // Check if e is an instance of ChangeEvent (standard input change)
    if (typeof e !== 'string') {
      name = e.target.name;
      value = e.target.value;
    } else {
      // For RadioGroup, we already know the name, and e is the value
      name = 'type';
      value = e;
    }
  
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVehicleChange = (value: string, index: number) => {
    setData(prevData => ({
      ...prevData,
      vehicles: prevData.vehicles.map((vehicle, i) =>
        i === index ? { ...vehicle, plate: value } : vehicle
      ),
    }));
  };

  const addVehicle = () => {
    setData(prevData => ({
      ...prevData,
      vehicles: [...prevData.vehicles, { plate: '' }],
    }));
  };

  const removeVehicle = (index: number) => {
    setData(prevData => ({
      ...prevData,
      vehicles: prevData.vehicles.filter((_, i) => i !== index),
    }));
  };

  const submitForm = () => {
    console.log("test")
    console.log(data)
    submit(data)
  }
     
  return (
    <form onSubmit={submitForm}>
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
              Property Information
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PersonalInformationForm 
              data={data}
              handleInputChange={handleInputChange}
              handleVehicleChange={handleVehicleChange}
              addVehicleInput={addVehicle}
              removeVehicle={removeVehicle}/>
            </TabPanel>
            <TabPanel>
              <PropertyInformationForm 
               handleInputChange2={handleInputChange2}/>
               
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
    </form>
  )
}
export default MembershipForm
