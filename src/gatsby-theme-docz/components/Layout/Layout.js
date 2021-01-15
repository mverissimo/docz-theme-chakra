import React, { useRef } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

function Layout({ children }) {
  const nav = useRef();

  return (
    <Flex justify="center">
      <Header />
      <Grid
        w="100%"
        maxWidth="1600px"
        minHeight="100%"
        paddingTop="65px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem position="relative">
          <Sidebar ref={nav} />
        </GridItem>
        <GridItem colSpan={3}>{children}</GridItem>
      </Grid>
    </Flex>
  );
}

export default Layout;
