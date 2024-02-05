"use client";

import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

export default function SidebarItem({
  icon,
  title,
  selectedModule,
  setSelectedModule,
  sidebarSize,
}: {
  icon: any;
  title: string;
  selectedModule: string;
  setSelectedModule: string;
  sidebarSize: string;
}) {
  const navigateToModule =
    "/system-admin/" + title.toLowerCase().replace(/\s+/g, "-");

  const colors = {
    selected: "#E9C850",
    unselected: "none",
  };

  return (
    <Box
      mt={"1.4rem"}
      w="100%"
      alignItems={sidebarSize === "small" ? "center" : "left"}
      fontSize={"sm"}
      fontFamily={"font.body"}
    >
      <Menu placement="right">
        <Link
          href={navigateToModule}
          backgroundColor={selectedModule ? colors.selected : colors.unselected}
          p={3}
          borderRadius={8}
          _hover={{
            textDecor: "none",
            backgroundColor: selectedModule || "#688f6e",
            color: "white",
          }}
          w={sidebarSize}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={selectedModule ? "black" : "white"}
              />
              <Text
                textAlign={"left"}
                ml={5}
                display={sidebarSize === "small" ? "none" : "flex"}
                color={selectedModule ? "black" : "white"}
                fontWeight={setSelectedModule ? "bold" : "normal"}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Box>
  );
}
