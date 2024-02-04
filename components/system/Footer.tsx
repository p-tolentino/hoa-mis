"use client";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <Flex
      as="nav"
      bgColor="black"
      wrap="wrap"
      p="20px"
      color="white"
      bottom="0"
      direction={{ base: "column", md: "row" }}
    >
      <Box px={{ base: "10", md: "20" }} p={{ md: "30px" }}>
        {/* <Image
                src={logo}
              w={{ base: "60px", md: "100px" }}
              filter="brightness(1000%)"
            /> */}
        <Heading size="lg" fontFamily="font.body">
          LOGO
        </Heading>
        <Text
          fontFamily="font.heading"
          fontSize={{ base: "8px", md: "10px" }}
          fontWeight="500"
        >
          System Name
        </Text>
      </Box>
      <Spacer />
      <Flex
        direction="column"
        fontFamily="font.heading"
        fontSize={{ base: "9px", md: "10px" }}
        mt={{ base: "20px", md: "0" }}
        px={{ base: "10" }}
        py={{ base: "8px" }}
      >
        <Text
          py="5px"
          fontWeight="bold"
          fontFamily="font.body"
          fontSize={{ base: "12px", md: "12px" }}
        >
          HOME
        </Text>
        <Text as="a" rel="noopener" href="/">
          ABOUT US
        </Text>
        <Text as="a" rel="noopener" href="/#registerHOA">
          REGISTER HOA
        </Text>
        <Text as="a" rel="noopener" href="/#policies">
          TERMS AND CONDITIONS
        </Text>
        <Text as="a" rel="noopener" href="/#contactUs">
          CONTACT US
        </Text>
      </Flex>
      <Spacer />
      <Flex
        fontFamily="font.heading"
        fontWeight="normal"
        fontSize={{ base: "9px", md: "10px" }}
        direction="column"
        px={{ base: "10" }}
        py={{ base: "8px" }}
        mr={{ base: "0", md: "50px" }}
      >
        <Text
          py="5px"
          fontFamily="font.body"
          fontSize={{ base: "12px", md: "12px" }}
          fontWeight="bold"
        >
          CONTACT INFO
        </Text>
        <Text as="a" href="mailto:Info@systemname.com">
          <Icon as={EmailIcon} /> Info@systemname.com
        </Text>
      </Flex>
    </Flex>
  );
};
