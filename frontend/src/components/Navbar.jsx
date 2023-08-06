import React, { useContext, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/ChatProvider";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await fetch("http://localhost:4000/user/logout", {
      method: "POST",
      credentials: "include",
    });
    setLoggedInUser();
    navigate("/auth");
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="primary"
      color="white"
      position="sticky"
      top={0}
      zIndex={123}
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
        {loggedInUser ? (
          <>
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
          </>
        ) : null}
        {loggedInUser ? (
          <Menu>
            <MenuButton
              as={Avatar}
              size={"sm"}
              name="John Doe"
              src="https://placekitten.com/200/200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              cursor={"pointer"}
            />
            <MenuList
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              bg={"primary-variant"}
              borderWidth={0}
              p={0}
              borderRadius={5}
            >
              <MenuItem
                color={"#f2f2fe"}
                bg={"primary-variant"}
                _hover={{ bg: "red" }}
                p={"0.8rem"}
              >
                {loggedInUser?.name} (
                {loggedInUser.isAdmin ? "admin" : "author"})
              </MenuItem>
              <MenuItem
                color={"#f2f2fe"}
                bg={"primary-variant"}
                _hover={{ bg: "red" }}
                p={"0.8rem"}
                onClick={handleLogout}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
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
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
