import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="primary"
      color="white"
    >
      {/* Logo */}
      <Box>
        <Link
          to={"/"}
          style={{
            fontSize: "1.9rem",
            fontFamily: "'Great Vibes', cursive",
            fontWeight: "bold",
            marginLeft: "15rem",
            letterSpacing: "0.1rem",
            color: "#f2f2fe",
          }}
        >
          Blognest
        </Link>
      </Box>

      {/* Navigation Links */}
      <Flex align="center" mr="10rem">
        <Box mr="5rem">
          <Link
            to={"/create"}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.45rem",
            }}
          >
            Create
          </Link>
        </Box>
        <Box mr="5rem">
          <Link
            to={"/saved"}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.45rem",
            }}
          >
            Saved
          </Link>
        </Box>
        <Box mr="5rem">
          <Link
            to={"/auth"}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.45rem",
            }}
          >
            Login
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;