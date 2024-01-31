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
} from "@chakra-ui/react";

function SignUp() {
  return (
    <Box>
      <NAVBAR />
      <Flex
        w="100vw"
        h="100vh"
        justify="center"
        alignItems="center"
        border="1px blue solid"
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
            <Heading size="lg" textAlign="center" mb="3">
              Sign up
            </Heading>
            <Text size="sm" textAlign="center" color="gray" mb="5">
              Welcome! Fill up your account
            </Text>
          </Box>
          <FormControl id="firstname" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="First Name" type="string" />
          </FormControl>
          <FormControl id="lastname" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last Name" type="string" />
          </FormControl>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input placeholder="firstname_lastname" type="string" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder="******" type="password" />
          </FormControl>
          <Stack spacing={2} mt="20px">
            <Button type="submit" colorScheme="yellow" borderRadius="10">
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
export default SignUp;
