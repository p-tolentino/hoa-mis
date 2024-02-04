"use client";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";

function PersonalInformationForm() {
  return (
    <Stack w="100%">
      <FormControl>
        <FormLabel fontSize="md" fontFamily="font.body">
          Full Name:
        </FormLabel>
        <Flex>
          <Input
            isRequired
            type="string"
            placeholder="First Name"
            fontSize="14px"
            size="md"
            w="25%"
          />
          <Spacer />
          <Input
            type="string"
            placeholder="Middle Name"
            fontSize="14px"
            size="md"
            w="25%"
          />
          <Spacer />
          <Input
            type="string"
            placeholder="Last Name"
            fontSize="14px"
            size="md"
            w="25%"
          />
        </Flex>
      </FormControl>
      <FormControl>
        <Stack>
          <Flex direction="row">
            <Box>
              <FormLabel mt="30px" fontSize="md" fontFamily="font.body">
                ID No. Issued:
              </FormLabel>
              <Input
                isRequired
                type="number"
                placeholder="XXXXX"
                fontSize="14px"
                size="md"
              />
            </Box>
            <Spacer />
            <Box>
              <FormLabel mt="30px" fontSize="md" fontFamily="font.body">
                Upload ID:
              </FormLabel>
              <Input isRequired type="number" fontSize="14px" size="md" />
            </Box>
            <Spacer />
            <Box>
              <FormLabel mt="30px" fontSize="md" fontFamily="font.body">
                Date of Birth
              </FormLabel>
              <Input
                isRequired
                type="date"
                placeholder="XXXXX"
                fontSize="14px"
                size="md"
              />
            </Box>
          </Flex>
        </Stack>
      </FormControl>
      <FormControl>
        <FormLabel mt="30px" fontSize="md" fontFamily="font.body">
          Complete Home Address:
        </FormLabel>
        <Input
          isRequired
          type="string"
          placeholder="House No."
          fontSize="14px"
          size="md"
          w="20%"
          mr="100"
        />
        <Input
          type="string"
          placeholder="Street Name"
          fontSize="14px"
          size="md"
          w="20%"
          mr="100"
        />
        <Input
          type="string"
          placeholder="Barangay No."
          fontSize="14px"
          size="md"
          w="20%"
        />
      </FormControl>
      <FormControl>
        <FormLabel mt="30px" fontSize="md" fontFamily="font.body" />
        <Input
          isRequired
          type="string"
          placeholder="City/Municipality"
          fontSize="14px"
          size="md"
          w="20%"
          mr="100"
        />
        <Input
          type="string"
          placeholder="Region"
          fontSize="14px"
          size="md"
          w="20%"
          mr="100"
        />
        <Input
          type="string"
          placeholder="Postal Code"
          fontSize="14px"
          size="md"
          w="20%"
        />
      </FormControl>
      <FormControl>
        <Stack direction="row" spacing="85">
          <Box>
            <FormLabel mt="30px" fontSize="md" fontFamily="font.body">
              Contact Number:
            </FormLabel>
            <Input
              isRequired
              type="number"
              placeholder="0900 000 0000"
              fontSize="14px"
              size="md"
              w="95%"
              mr="100"
            />
          </Box>
          <Box>
            <FormLabel mt="30px" fontSize="md" fontFamily="font.body">
              Email Address:
            </FormLabel>
            <Input
              isRequired
              type="email"
              placeholder="email.address@gmail.com"
              fontSize="14px"
              size="md"
              w="95%"
              mr="100"
            />
          </Box>
          <Box>
            <FormLabel mt="30px" fontSize="md" fontFamily="font.body">
              Religion:
            </FormLabel>
            <Input
              isRequired
              type="string"
              fontSize="14px"
              size="md"
              w="120%"
              mr="100"
            />
          </Box>
        </Stack>
      </FormControl>
    </Stack>
  );
}
export default PersonalInformationForm;
