import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme, ComponentsProvider } from "docz";

import components from "./components";

const Theme = ({ children }) => {
  return (
    <ChakraProvider resetCSS>
      <ComponentsProvider components={components}>
        {children}
      </ComponentsProvider>
    </ChakraProvider>
  );
};

export default theme()(Theme);
