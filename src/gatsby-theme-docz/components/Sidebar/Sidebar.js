import React, { forwardRef, useState, useRef, useEffect } from "react";
import { useMenus, useCurrentDoc } from "docz";
import { Box } from "@chakra-ui/react";

import { Link } from "../Link";

const Sidebar = forwardRef(({ item, ...props }, ref) => {
  const menus = useMenus();
  const currentDocRef = useRef();

  useEffect(() => {
    if (ref.current && currentDocRef.current) {
      ref.current.scrollTo(0, currentDocRef.current.offsetTop);
    }
  }, []);

  return (
    <Box
      as="nav"
      position="absolute"
      top="0"
      left="0"
      width="full"
      minHeight="100%"
      overflowY="auto"
      overflowX="hidden"
      py="6"
      px="4"
      pr="6"
    >
      <Box>
        {menus.map((menu) => {
          return (
            <Link key={menu.id} item={menu}>
              {menu.name}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
});

export default Sidebar;
