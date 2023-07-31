import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Signup() {
  const [show, setShow] = useState(false);
  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter your Name" />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input placeholder="Enter your Email Address" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size={"md"}>
          <Input type={show ? "text" : "password"} placeholder="Enter password" />
          <InputRightElement w={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="profilePic">
        <FormLabel>Upload your Picture</FormLabel>
        <input type="file" />
      </FormControl>
      <Button
        variant={"solid"}
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
      >
        Sign Up
      </Button>
    </VStack>
  );
}

export default Signup;
