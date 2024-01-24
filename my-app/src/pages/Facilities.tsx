import {
  Flex,
  Text,
  Heading,
  Stack,
  Card,
  CardBody,
  Image,
  Divider,
} from "@chakra-ui/react";

function Facilities() {
  return (
    <Flex>
      <Card maxW="md">
        <CardBody>
          <Image
            src="https://houseforall.files.wordpress.com/2011/10/clubhouse.jpg"
            alt="Clubhouse"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Clubhouse</Heading>
            <Divider />
            <Text>
              Welcome to the charming Clubhouse nestled within the heart of our
              inviting subdivision. A beacon of community spirit and leisure,
              this meticulously designed facility offers residents a versatile
              space for socializing, recreation, and shared experiences.
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card maxW="md">
        <CardBody>
          <Image
            src="  https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Swimming Pool"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Swimming Pool</Heading>
            <Divider />
            <Text>
              Our pristine swimming pool, nestled amid lush greenery and a
              backdrop of modern architecture, our community swimming pool is a
              haven for residents seeking relaxation, exercise, and social
              connections.
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card maxW="md">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1494199505258-5f95387f933c?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Basketball Court"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Basketball Court</Heading>
            <Divider />
            <Text>
              The meticulously designed basketball court nestled within our
              vibrant subdivision. This outdoor haven is more than just a place
              to shoot hoops; it's a focal point where residents come together
              to engage in friendly competition, build camaraderie, and foster a
              sense of community spirit.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}
export default Facilities;
