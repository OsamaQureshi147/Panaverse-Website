"use client";
import NavBar from "./navbar";
import "./globals.css";
import { Container } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Container maxW='90%' margin='0 auto'>
          <NavBar />
          {children}
        </Container>
      </body>
    </html>
  );
}
