"use client";
import { AddIcon } from "@chakra-ui/icons";
import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  IconButton,
  Button,
  Spacer,
} from "@chakra-ui/react";

function VehicleInformationForm() {
  return (
    <Stack maxW="100rem">
      <FormControl isRequired>
        <FormLabel fontSize="md" fontFamily="font.body">
          Plate No. of vehicle/s owned/used and are parked in this HOA:
        </FormLabel>
        <Input
          type="number"
          placeholder="Enter Plate No."
          fontSize="14px"
          size="md"
          w="30%"
        />
        <IconButton
          w="10"
          ml="20px"
          size="md"
          aria-label="Add Plate No."
          icon={<AddIcon />}
        />
      </FormControl>
    </Stack>
  );
}
export default VehicleInformationForm;
