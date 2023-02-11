"use client";

import Image from "next/image";
import { Box, Flex, HStack } from "@chakra-ui/react";
import panaverseLogo from "../../public/panaverseLogo.png";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex
      justifyContent='space-between'
      fontSize={20}
      fontWeight='bold'
      letterSpacing={2}
      paddingBlock={15}
    >
      <Flex gap={100}>
        <Link href='/'>
          <HStack>
            <Image
              src={panaverseLogo}
              alt='panaverse logo'
              width={60}
              height={60}
            />
            <Box as='p'>Panaverse</Box>
          </HStack>
        </Link>

        <HStack as='nav'>
          <Box as='ul'>
            <Flex gap={40}>
              <Link href='/'>
                <Box as='li'>Home</Box>
              </Link>
              <Link href='/about'>
                <Box as='li'>About</Box>
              </Link>
              <Link href='/courses'>
                <Box as='li'>Courses</Box>
              </Link>
            </Flex>
          </Box>
        </HStack>
      </Flex>

      <HStack>
        <Flex gap={40}>
          <Link href='/login'>
            <Box>Login</Box>
          </Link>
          <Link href='/signup'>
            <Box>Sign up</Box>
          </Link>
        </Flex>
      </HStack>
    </Flex>
  );
}
