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

function Signup() {
  const [show, setShow] = useState(false);
  const toast = useToast();
  const { loggedInUser, setLoggedInUser, getLoggedInUserInfo } =
    useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState();

  function showToastError() {
    return toast({
      render: () => (
        <Box
          p={4}
          bg="red"
          color="#f2f2fe"
          borderRadius="md"
          boxShadow="md"
        >
          <Text fontWeight="bold" fontSize="lg">
            Email already exists
          </Text>
          <Text>
            Try logging in or sign up with a different email
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
            Sign up successfull
          </Text>
        </Box>
      ),
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  }

  const handleSignup = async () => {
    if (!name || !email || !password) {
      toast({
        title: "Please fill all the fields",
        description: "",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePic", profilePic);
    try {
      const response = await fetch("http://localhost:4000/user/signup", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setLoggedInUser(data);
        navigate("/");
        setName("");
        setEmail("");
        setPassword("");
        setProfilePic("");
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
    <VStack spacing={"5px"}>
      <FormControl id="first-name">
        <FormLabel color={"#f2f2fe"}>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          bg={"gray-700"}
          color={"#f2f2fe"}
          borderWidth={0}
          outline={0}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel color={"#f2f2fe"}>Email Address</FormLabel>
        <Input
          placeholder="Enter your Email Address"
          bg={"gray-700"}
          color={"#f2f2fe"}
          borderWidth={0}
          outline={0}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel color={"#f2f2fe"}>Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            bg={"gray-700"}
            color={"#f2f2fe"}
            borderWidth={0}
            outline={0}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="profilePic">
        <FormLabel color={"#f2f2fe"}>Upload your Picture</FormLabel>
        <input
          type="file"
          style={{ color: "#f2f2fe" }}
          onChange={(e) => setProfilePic(e.target.files[0])}
        />
      </FormControl>
      <Button
        bg={"primary"}
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={handleSignup}
        _hover={{ bg: "primary-variant" }}
      >
        Sign Up
      </Button>
    </VStack>
  );
}

export default Signup;
