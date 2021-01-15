import React from "react";
import {
  Heading as BaseHeading,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";

function Heading({ children, id, ...props }) {
  return (
    <BaseHeading
      fontWeight="semibold"
      pt="0.6em"
      css={{
        "&[id]": {
          pointerEvents: "none",
        },
        "&[id]:before": {
          display: "block",
          height: " 6rem",
          marginTop: "-6rem !important",
          visibility: "hidden",
          content: `""`,
        },
        "&[id]:hover a": { opacity: 1 },
      }}
      {...props}
    >
      <Box pointerEvents="auto">
        {children}
        {id && (
          <ChakraLink
            aria-label="anchor"
            as="a"
            color="gray.500"
            fontWeight="normal"
            outline="none"
            _focus={{ opacity: 1, boxShadow: "outline" }}
            opacity={0}
            ml="0.375rem"
            href={`#${id}`}
          >
            #
          </ChakraLink>
        )}
      </Box>
    </BaseHeading>
  );
}

export default {
  h1: (props) => <Heading as="h1" fontSize="2em" {...props} />,
  h2: (props) => <Heading as="h2" fontSize="1.4em" {...props} />,
  h3: (props) => <Heading as="h3" fontSize="1.2em" {...props} />,
  h4: (props) => <Heading as="h4" fontSize="1em" {...props} />,
  h5: (props) => <Heading as="h5" fontSize="0.8em" {...props} />,
  h6: (props) => <Heading as="h6" fontSize="0.6em" {...props} />,
};
