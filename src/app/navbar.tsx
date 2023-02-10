"use client";

import { Box, Flex, HStack } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex justifyContent='space-between'>
      <HStack>
        <Box>Image</Box>
        <Box as='p'>Panaverse</Box>
      </HStack>

      <HStack as='nav'>
        <Box as='ul'>
          <Flex>
            <Box as='li'>Home</Box>
            <Box as='li'>About</Box>
            <Box as='li'>Courses</Box>
          </Flex>
        </Box>
      </HStack>

      <HStack>
        <Box>Login</Box>
        <Box>Sign up</Box>
      </HStack>
    </Flex>
  );
}
