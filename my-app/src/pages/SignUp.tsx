import NAVBAR from "../components/Navbar";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Select,
} from "@chakra-ui/react";

function SignUp() {
  return (
    <Box>
      <NAVBAR />
      <Flex
        w="100%"
        h="100%"
        justify="center"
        alignItems="center"
        mt="20"
        mb="20"
      >
        <Stack
          w="full"
          maxW="50vw"
          rounded="xl"
          boxShadow="xl"
          px="6"
          py="10"
          bg="white"
        >
          <Box mb="10px">
            <Heading
              size="lg"
              fontFamily="font.heading"
              textAlign="center"
              mb="3"
            >
              Sign up
            </Heading>
            <Text
              size="sm"
              fontFamily="font.body"
              textAlign="center"
              color="gray"
              mb="5"
            >
              Welcome! Fill up your account
            </Text>
          </Box>
          <FormControl id="username" isRequired pos={"static"}>
            <FormLabel fontFamily="font.body">Email Address</FormLabel>
            <Input
              pos={"static"}
              fontFamily="font.body"
              placeholder="email.address@gmail.com"
              type="string"
            />
          </FormControl>
          <FormControl id="password" isRequired pos={"static"}>
            <FormLabel fontFamily="font.body">Password</FormLabel>
            <Input pos={"static"} placeholder="******" type="password" />
          </FormControl>
          <Heading
            size="md"
            fontFamily="font.heading"
            textAlign="left"
            mb="3"
            mt="5"
          >
            Personal Information
          </Heading>
          <FormControl id="firstname" isRequired pos={"static"}>
            <FormLabel fontFamily="font.body">First Name</FormLabel>
            <Input
              pos={"static"}
              fontFamily="font.body"
              placeholder="First Name"
              type="string"
            />
          </FormControl>
          <FormControl id="middlename" isRequired pos={"static"}>
            <FormLabel fontFamily="font.body">Middle Name</FormLabel>
            <Input
              pos={"static"}
              fontFamily="font.body"
              placeholder="Middle Name"
              type="string"
            />
          </FormControl>
          <FormControl id="lastname" isRequired pos={"static"}>
            <FormLabel fontFamily="font.body">Last Name</FormLabel>
            <Input
              pos={"static"}
              fontFamily="font.body"
              placeholder="Last Name"
              type="string"
            />
          </FormControl>
          <FormControl id="contactnumber" isRequired pos={"static"}>
            <FormLabel fontFamily="font.body">Contact Number</FormLabel>
            <Input
              pos={"static"}
              fontFamily="font.body"
              placeholder="Contact Number"
              type="int"
            />
          </FormControl>
          <Heading
            size="md"
            fontFamily="font.heading"
            textAlign="left"
            mb="3"
            mt="5"
          >
            Property Information
          </Heading>
          <Select
            fontFamily="cabin variable"
            placeholder="Home Address"
            color="gray"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Stack spacing={2} mt="20px">
            <Button
              type="submit"
              colorScheme="yellow"
              borderRadius="10"
              fontFamily="font.body"
              fontWeight="800"
            >
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
export default SignUp;
