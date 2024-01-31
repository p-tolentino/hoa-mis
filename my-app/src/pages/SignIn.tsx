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
  Link,
  HStack,
} from "@chakra-ui/react";
import subdivision from "../images/subdivision.jpg";
import GoogleIcon from "../images/google-icon.png";

function SignIn() {
  return (
    <Box>
      <NAVBAR />
      <Flex w="100vw" h="100vh" justify="space-between">
        <Box w="50vw" h="100vh" verticalAlign="left">
          <Flex h="100vh" justify="center" alignItems="center">
            <Stack
              w="full"
              maxW="md"
              rounded="xl"
              boxShadow="lg"
              px="6"
              py="10"
              bg="white"
            >
              <Box mb="10px">
                <Heading size="lg" textAlign="left">
                  Sign in
                </Heading>
                <Text size="sm" textAlign="left" color="gray" mb="5">
                  Welcome Back! Sign in using Google
                </Text>
              </Box>
              <Button
                variant="outline"
                _hover={{ color: "#E9C850" }}
                leftIcon={
                  <img
                    src={GoogleIcon}
                    alt="Google Icon"
                    style={{ width: "30px" }}
                  />
                }
              >
                Google
              </Button>
              <Text size="sm" textAlign="center" color="gray" mt="5" mb="5">
                or Sign in using Email Address
              </Text>
              <FormControl id="email">
                <FormLabel>Email Address</FormLabel>
                <Input placeholder="email@address.com" type="string" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input placeholder="*****" type="password" />
              </FormControl>
              <HStack alignSelf="center">
                <Text fontSize="14px" textAlign="center" color="gray">
                  Don't have an account yet?
                </Text>
                <Link href="sign-up" fontSize="14px" color="blue">
                  Sign up
                </Link>
              </HStack>
              <Stack spacing={2} mt="20px">
                <Button type="submit" colorScheme="yellow" borderRadius="10">
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Box>
        <Box w="50vw" height="100vh" right="0">
          <img src={subdivision} alt="Subdivision" style={{ height: "100%" }} />
        </Box>
      </Flex>
    </Box>
  );
}
export default SignIn;
