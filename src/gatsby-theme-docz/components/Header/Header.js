import React from "react";
import { useConfig } from "docz";
import {
  Flex,
  HStack,
  Stack,
  Box,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";
import { FiMoon, FiSun } from "react-icons/fi";

function Header(props) {
  const { repository } = useConfig();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      width="full"
      zIndex="4"
      justify="center"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
    >
      <Flex
        py="3"
        width="full"
        maxWidth="1600px"
        align="center"
        justify="space-between"
      >
        <DiGithubBadge />

        <HStack align="center">
          <IconButton
            as="a"
            href=""
            rel="noopener noreferrer"
            target="_blank"
            icon={<DiGithubBadge />}
            variant="ghost"
            fontSize="24px"
            color="gray.500"
            _hover={{
              background: "none",
            }}
            _active={{
              background: "none",
            }}
          />

          <IconButton
            icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
            variant="ghost"
            color="gray.500"
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Header;
