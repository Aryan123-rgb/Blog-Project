import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
  Box,Text
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/ChatProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const { loggedInUser, setLoggedInUser, getLoggedInUserInfo } =
    useContext(UserContext);
  const toast = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function showToastError() {
    return toast({
      render: () => (
        <Box p={4} bg="red" color="#f2f2fe" borderRadius="md" boxShadow="md">
          <Text fontWeight="bold" fontSize="lg">
            Invalid credentials
          </Text>
        </Box>
      ),
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  }

  function showToastSuccess() {
    return toast({
      render: () => (
        <Box
          p={4}
          bg="green"
          color="#f2f2fe"
          borderRadius="md"
          boxShadow="md"
        >
          <Text fontWeight="bold" fontSize="lg">
            Welcome back
          </Text>
        </Box>
      ),
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  }

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        description: "",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setLoggedInUser(data);
        navigate("/");
        setEmail("");
        setPassword("");
        showToastSuccess();
      }
      else{
        showToastError();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <VStack spacing={"10px"}>
      <FormControl id="email">
        <FormLabel color={"#f2f2fe"}>Email Address</FormLabel>
        <Input
          placeholder="Enter your Email Address"
          color={"#f2f2fe"}
          bg={"gray-700"}
          borderWidth={0}
          outline={0}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel color={"#f2f2fe"}>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            color={"#f2f2fe"}
            bg={"gray-700"}
            borderWidth={0}
            outline={0}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        width={"100%"}
        style={{ marginTop: 15 }}
        bg={"primary"}
        color={"#f2f2fe"}
        onClick={handleLogin}
        _hover={{ bg: "primary-variant" }}
      >
        Login
      </Button>
      <Button
        variant={"solid"}
        bg={"red"}
        _hover={{ opacity: "0.9" }}
        width={"100%"}
        color={"#f2f2fe"}
      >
        Guest User
      </Button>
    </VStack>
  );
}

export default Login;
