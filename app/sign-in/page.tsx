"use client";

import Navbar from "../components/homepage-components/Navbar";

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
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import React from "react";

export default function SignIn() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <Navbar />
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
                <Heading size="lg" textAlign="left" fontFamily="font.heading">
                  Sign in
                </Heading>
                <Text
                  size="sm"
                  fontFamily="font.body"
                  textAlign="left"
                  color="gray"
                  mb="5"
                >
                  Welcome Back! Sign in using Google
                </Text>
              </Box>
              <Button
                variant="outline"
                _hover={{ color: "#E9C850" }}
                leftIcon={
                  <Image src="/google-icon.png" alt="Google Icon" w={"30px"} />
                }
                fontFamily="font.body"
              >
                Google
              </Button>
              <Text
                size="sm"
                fontFamily="font.body"
                textAlign="center"
                color="gray"
                mt="5"
                mb="5"
              >
                or Sign in using Email Address
              </Text>
              <FormControl id="username">
                <FormLabel fontFamily="font.body">Email Address</FormLabel>
                <Input
                  fontFamily="font.body"
                  placeholder="email.address@gmail.com"
                  type="string"
                />
              </FormControl>
              <InputGroup>
                <Input
                  pos={"static"}
                  fontFamily="font.body"
                  type={show ? "text" : "password"}
                  placeholder="******"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="md"
                    onClick={handleClick}
                    variant="ghost"
                  >
                    {show ? <FaRegEyeSlash /> : <FaRegEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <HStack alignSelf="center">
                <Text
                  fontSize="14px"
                  fontFamily="font.body"
                  textAlign="center"
                  color="gray"
                >
                  Don't have an account yet?
                </Text>
                <Link
                  href="/sign-up"
                  fontFamily="font.body"
                  fontSize="14px"
                  color="blue"
                >
                  Sign up
                </Link>
              </HStack>
              <Stack spacing={2} mt="20px">
                <Button
                  type="submit"
                  colorScheme="yellow"
                  borderRadius="10"
                  fontFamily="font.body"
                  fontWeight="800"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Box>
        <Box w="50vw" height="100vh" right="0">
          <Image src="/subdivision.jpg" alt="Subdivision" h={"100%"} />
        </Box>
      </Flex>
    </Box>
  );
}