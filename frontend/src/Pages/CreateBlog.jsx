import React, { useContext, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { UserContext } from "../Context/ChatProvider";

function CreateBlog() {
  const [title, setTitle] = useState();
  const [summary, setSummary] = useState();
  const [description, setDescription] = useState();
  const [imageFile, setImageFile] = useState(null);
  const { blogs, setBlogs } = useContext(UserContext);

  const handleSubmit = async () => {
    if (!title || !summary || !description) {
      console.log(title);
      console.log(summary);
      console.log(description);
      alert("All fields are required");
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('summary', summary);
    formData.append('description', description);
    formData.append('imageFile', imageFile);
    
    const response = await fetch('http://localhost:4000/blog/createBlog', {
      method: 'POST',
      body: formData,
      credentials:'include'
    });
    const data = await response.json()
    console.log(data);
  };

  return (
    <Box p={4} w={"90%"} mx={"auto"}>
      <Box bg={"bg"} p={4}>
        <Heading color="#f2f2fe">Create Blog</Heading>
      </Box>
      <Flex direction="column" mt={8}>
        <FormControl>
          <FormLabel color={"#f2f2fe"}>Title</FormLabel>
          <Input
            type="text"
            color={"#f2f2fe"}
            mb={4}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel color={"#f2f2fe"}>Summary</FormLabel>
          <Textarea
            color={"#f2f2fe"}
            mb={4}
            placeholder="Summary"
            resize={"none"}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel color={"#f2f2fe"}>Description</FormLabel>
          <Textarea
            color={"#f2f2fe"}
            mb={4}
            placeholder="Description"
            h={"40vh"}
            resize={"none"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel color={"#f2f2fe"}>Image</FormLabel>
          <input
            type="file"
            mb={4}
            style={{ color: "#f2f2fe" }}
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </FormControl>
      </Flex>
      <Button
        bg={"primary"}
        color={"#f2f2fe"}
        _hover={{ bg: "primary-variant" }}
        mt={6}
        onClick={handleSubmit}
      >
        Create Blog
      </Button>
    </Box>
  );
}

export default CreateBlog;
