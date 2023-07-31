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

function Login() {
  const [show, setShow] = useState(false);
  return (
    <VStack spacing={"10px"}>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input placeholder="Enter your Email Address" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        variant={"solid"}
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
      >
        Login
      </Button>
      <Button variant={"solid"} colorScheme="red" width={"100%"}>
        Guest User
      </Button>
    </VStack>
  );
}

export default Login;
