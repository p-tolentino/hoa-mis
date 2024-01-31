import { useState } from "react";
import { MdComputer as Logo } from "react-icons/md";
import {
  Link,
  Box,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import SignInButton from "./SignInButton";

const colors = {
  selected: "#E9C850",
  unselected: "white",
};

function Navbar() {
  const [clickedLinkId, setClickedLinkId] = useState("");

  const handleLinkClick = (linkId: string) => {
    setClickedLinkId(linkId);
  };

  return (
    <Flex
      as="nav"
      p="20px"
      alignItems="center"
      bg="brand.500"
      color="white"
      wrap="wrap"
      pos="sticky"
      top="0"
    >
      <Flex>
        <Heading ml="10px" color="white" size="xl">
          <Logo />
        </Heading>
        <Box ml="20px">
          <Heading paddingTop="5px" size="md">
            <Text as="a" rel="noopener" href="/">
              System Name
            </Text>
          </Heading>
        </Box>
      </Flex>
      <Spacer />
      <HStack gap="10">
        <Link
          href="/"
          _hover={{ color: "#E9C850" }}
          padding="10px"
          px="20px"
          onClick={() => handleLinkClick("about us")}
          color={
            clickedLinkId === "about us" ? colors.selected : colors.unselected
          }
        >
          About
        </Link>
        <Link
          href="/#facilities"
          _hover={{ color: "#E9C850" }}
          padding="10px"
          px="20px"
          onClick={() => handleLinkClick("facilities")}
          color={
            clickedLinkId === "facilities" ? colors.selected : colors.unselected
          }
        >
          Facilities
        </Link>
        <Link
          _hover={{ color: "#E9C850" }}
          padding="10px"
          px="20px"
          onClick={() => handleLinkClick("policies")}
          color={
            clickedLinkId === "policies" ? colors.selected : colors.unselected
          }
        >
          Policies
        </Link>
        <Link
          href="/#contactUs"
          _hover={{ color: "#E9C850" }}
          padding="10px"
          px="20px"
          onClick={() => handleLinkClick("contact us")}
          color={
            clickedLinkId === "contact us" ? colors.selected : colors.unselected
          }
        >
          Contact Us
        </Link>
      </HStack>
      <Spacer />
      <SignInButton />
    </Flex>
  );
}

export default Navbar;
