import {
  Container,
  Flex,
  Button,
  Text,
  Box,
  Textarea,
  Stack,
  Input,
  Heading,
} from "@chakra-ui/react";
// import "@fontsource/cabin";
import { Icon } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useState } from "react";

function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Flex id="contactUs" mx={"3rem"}>
      <Container
        maxW={{ base: "90%", md: "650px" }}
        py={{ base: "25px", md: "50px" }}
        pt={{ base: "100px", md: "50px" }}
      >
        <Stack>
          <Box p="20px">
            <Heading
              size={{ base: "md", md: "lg" }}
              fontStyle="bold"
              fontWeight={{ base: "650", md: "800" }}
              lineHeight={{ base: "20px", md: "30px" }}
              textAlign="center"
              color="black"
            >
              Contact Us
            </Heading>
            <Text
              fontSize={{ base: "10px", md: "12px" }}
              fontWeight={{ base: "400px", md: "600px" }}
              align="center"
              lineHeight="30px"
              color="black"
            >
              Fill up the form to contact
            </Text>
          </Box>
          <Flex
            direction={{ base: "column", md: "column" }}
            border="1px solid #e8e8e8"
            boxShadow="xl"
            borderRadius="xl"
          >
            <Flex
              alignSelf="center"
              direction="column"
              backgroundColor="white"
              width={{ base: "200", md: "600px" }}
              padding={{ base: "5", md: "10" }}
            >
              <Text
                fontSize={{ base: "12px", md: "16px" }}
                fontStyle="bold"
                fontWeight={{ base: "300px", md: "600px" }}
                lineHeight="49px"
              >
                Full Name
              </Text>
              <Input
                placeholder="Full Name"
                type="email"
                //   rows="1"
                fontSize={{ base: "10px", md: "14px" }}
                onChange={(e) => setFullname(e.target.value)}
              />
              <Text
                fontSize={{ base: "12px", md: "16px" }}
                fontStyle="bold"
                fontWeight={{ base: "300px", md: "600px" }}
                lineHeight="49px"
              >
                Phone Number
              </Text>
              <Input
                placeholder="Phone Number"
                type="email"
                //   rows="1"
                fontSize={{ base: "10px", md: "14px" }}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <Text
                fontSize={{ base: "12px", md: "16px" }}
                fontStyle="bold"
                fontWeight={{ base: "300px", md: "600px" }}
                lineHeight="49px"
              >
                Email Address
              </Text>
              <Input
                placeholder="Email Address"
                type="email"
                //   rows="1"
                fontSize={{ base: "10px", md: "14px" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Text
                fontSize={{ base: "12px", md: "16px" }}
                fontStyle="bold"
                fontWeight={{ base: "300px", md: "600px" }}
                lineHeight="49px"
              >
                Subject
              </Text>
              <Input
                placeholder="Subject"
                type="email"
                //   rows="1"
                fontSize={{ base: "10px", md: "14px" }}
                onChange={(e) => setSubject(e.target.value)}
              />
              <Text
                fontSize={{ base: "12px", md: "16px" }}
                fontStyle="bold"
                fontWeight={{ base: "300px", md: "600px" }}
                lineHeight="49px"
              >
                Message
              </Text>
              <Textarea
                placeholder="Enter a message"
                fontSize={{ base: "10px", md: "14px" }}
                h={{ base: "50px", md: "200px" }}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                as="a"
                href={
                  "mailto:info@cncdevcorp.com?subject=" +
                  subject +
                  "&body=" +
                  message
                }
                variant="solid"
                backgroundColor="#E9C850"
                fontSize={{ base: "10px", md: "14px" }}
                borderRadius={10}
                marginTop="3"
              >
                Send Message
              </Button>
            </Flex>
          </Flex>
        </Stack>
      </Container>
    </Flex>
  );
}

export default ContactUs;
