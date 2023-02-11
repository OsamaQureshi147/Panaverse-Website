"use client";

import { Roboto } from "@next/font/google";
import { Container, Box } from "@chakra-ui/react";
import NavBar from "./navbar";
import Footer from "./footer";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={roboto.className}>
      <head />
      <body>
        <Box as='header' bg='#12121266'>
          <Container maxW='90%' margin='0 auto'>
            <NavBar />
          </Container>
        </Box>
        <Container maxW='90%' margin='0 auto'>
          {children}
        </Container>
        <Box as='footer' bg='#12121266'>
          <Container maxW='90%' margin='0 auto'>
            <Footer />
          </Container>
        </Box>
      </body>
    </html>
  );
}
