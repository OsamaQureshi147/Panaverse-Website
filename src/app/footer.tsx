"use-client";

import { Flex, VStack, Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex paddingBlock={20} justifyContent='space-between'>
      <VStack>
        <Box>Col 1</Box>
        <Box>Row 2nd</Box>
      </VStack>
      <VStack>
        <Box>Col 1</Box>
        <Box>Row 2nd</Box>
      </VStack>
      <VStack>
        <Box>Col 1</Box>
        <Box>Row 2nd</Box>
      </VStack>
      <VStack>
        <Box>Col 1</Box>
        <Box>Row 2nd</Box>
      </VStack>
    </Flex>
  );
}

export default Footer;
