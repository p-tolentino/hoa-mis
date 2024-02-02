import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import "@fontsource-variable/cabin";
import "@fontsource-variable/montserrat";

function Footer() {
  return (
    <Container bgColor="black" maxW={{ base: "600px", md: "100vw" }}>
      <Flex
        px={{ base: "10", md: "20" }}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "left", md: "center" }}
        height={{ base: "350px", md: "150px" }}
        py="5"
      >
        <Box>
          {/* <Image
                src={logo}
              w={{ base: "60px", md: "100px" }}
              filter="brightness(1000%)"
            /> */}
          <Heading size="lg" color="white" fontFamily="cabin variable">
            LOGO
          </Heading>
          <Text
            fontFamily="cabin variable"
            fontSize={{ base: "8px", md: "10px" }}
            color="white"
            py="2"
            fontWeight="500"
          >
            System Name
          </Text>
        </Box>
        <Flex
          width={{ base: "65%", md: "60%" }}
          alignItems="flex-start"
          direction={{ base: "column", md: "row" }}
          ml={{ base: "0px", md: "500px" }}
          mt={{ base: "50px", md: "0px" }}
        >
          <Flex
            direction="column"
            color="white"
            fontFamily="cabin variable"
            fontWeight="normal"
            fontSize={{ base: "10px", md: "10px" }}
            py={{ base: "8px" }}
          >
            <Text py="5px" fontWeight="bold">
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
          <Flex
            color="white"
            fontFamily="cabin variable"
            fontWeight="normal"
            fontSize={{ base: "10px", md: "10px" }}
            direction="column"
            py={{ base: "8px" }}
            ml={{ base: "0px", md: "400px" }}
          >
            <Text
              py="5px"
              fontSize={{ base: "10px", md: "10px" }}
              fontWeight="bold"
            >
              CONTACT INFO
            </Text>
            <Text as="a" href="mailto:Info@systemname.com">
              <Icon as={EmailIcon} /> Info@systemname.com
            </Text>
          </Flex>
          <Spacer />
        </Flex>
      </Flex>
    </Container>
  );
}
export default Footer;
