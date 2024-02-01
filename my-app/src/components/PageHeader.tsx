import { Flex, Heading } from "@chakra-ui/react";

export default function PageHeader({ title }: { title: string }) {
  return (
    <Flex
      h={"max-content"}
      p={"25px"}
      pos={"sticky"}
      top={"0"}
      bgColor={"#5B8060"}
      color={"white"}
    >
      <Heading size={"lg"} fontFamily="montserrat variable">
        {title}
      </Heading>
    </Flex>
  );
}
