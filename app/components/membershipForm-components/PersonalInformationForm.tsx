"use client";
import React, { ChangeEvent } from "react";

interface PersonalInformationFormProps {
  data: {
    first: string;
    middle: string;
    last: string;
    phone: string;
    birth: string;
    vehicles: { plate: string }[];
    type: string;
  };
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleVehicleChange: (value: string, index: number) => void;
  addVehicleInput: () => void;
  removeVehicle: (index: number) => void;
}

import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Input,
  FormControl,
  FormLabel,
  Flex,
  Grid,
  GridItem,
  IconButton,
} from "@chakra-ui/react";

function PersonalInformationForm({
  data,
  handleInputChange,
  handleVehicleChange,
  addVehicleInput,
  removeVehicle,
}: PersonalInformationFormProps) {
  return (
    <Grid
      maxW="100rem"
      templateRows="repeat(4, 1fr)"
      templateColumns={"repeat(3, 1fr)"}
      gap={"2rem"}
      h="40vh"
    >
      {/* Full Name */}
      <GridItem colSpan={3}>
        <FormControl isRequired>
          <FormLabel fontSize="md" fontFamily="font.body">
            Full Name:
          </FormLabel>
          <Flex gap="2rem">
            {/* First Name */}
            <Input
              type="string"
              placeholder="First Name"
              fontSize="14px"
              fontFamily={"font.body"}
              size="md"
              name="first"
              value={data.first}
              onChange={handleInputChange}
            />
            {/* Middle Name */}
            <Input
              type="string"
              placeholder="Middle Name"
              fontFamily={"font.body"}
              fontSize="14px"
              size="md"
              name="middle"
              value={data.middle}
              onChange={handleInputChange}
            />
            {/* Last Name */}
            <Input
              type="string"
              placeholder="Last Name"
              fontFamily={"font.body"}
              fontSize="14px"
              size="md"
              name="last"
              value={data.last}
              onChange={handleInputChange}
            />
          </Flex>
        </FormControl>
      </GridItem>

      {/* Date of Birth and ID Number*/}
      <GridItem>
        <Flex gap="1rem">
          {/* Date of Birth */}
          <FormControl isRequired>
            <FormLabel fontSize="md" fontFamily="font.body">
              Date of Birth
            </FormLabel>
            <Input
              isRequired
              type="date"
              fontFamily="font.body"
              fontSize="14px"
              size="md"
              name="birth"
              value={
                data.birth
                  ? new Date(data.birth).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
            />
          </FormControl>
        </Flex>
      </GridItem>
      <GridItem>
        {/* Contact Number */}
        <FormControl isRequired>
          <FormLabel fontSize="md" fontFamily="font.body">
            Contact Number:
          </FormLabel>
          <Input
            type="number"
            placeholder="0900 000 0000"
            fontFamily="font.body"
            fontSize="14px"
            size="md"
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
          />
        </FormControl>
      </GridItem>
      <GridItem />
      {/* Plate Number of Vehicles */}
      <GridItem>
        <FormControl isRequired>
          <FormLabel fontSize="md" fontFamily="font.body">
            Plate No. of vehicle/s owned/used and are parked in this HOA:
          </FormLabel>
          {data.vehicles.map((vehicle, index) => (
            <Flex mb="4">
              <Input
                type="string"
                placeholder="Enter Plate No."
                fontSize="14px"
                size="md"
                name="vehicle"
                value={vehicle.plate}
                onChange={(e) => handleVehicleChange(e.target.value, index)}
                mr="2"
              />
              {index === data.vehicles.length - 1 && (
                <IconButton
                  onClick={addVehicleInput}
                  aria-label="Add Plate No."
                  icon={<AddIcon />}
                />
              )}
              {data.vehicles.length > 1 && ( // Only show remove button if more than one vehicle
                <IconButton
                  onClick={() => removeVehicle(index)} // Pass index correctly
                  aria-label="Remove Plate No."
                  icon={<CloseIcon />}
                  ml="2" // Add some left margin for spacing
                />
              )}
            </Flex>
          ))}
        </FormControl>
      </GridItem>
    </Grid>
  );
}
export default PersonalInformationForm;
