import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Context/ChatProvider";
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";

function EditBlog() {
  const { id } = useParams();
  const { blogs, getAllBlogs } = useContext(UserContext);
  const blog = blogs.find((blog) => blog._id === id);
  const navigate = useNavigate();

  function htmlToPlainTextWithLineBreaks(html) {
    const plainText = html.replace(/<br\s*[/]?>/gi, "\n");
    return plainText;
  }

  const [title, setTitle] = useState(blog?.title);
  const [summary, setSummary] = useState(blog?.summary);
  const [description, setDescription] = useState(
    htmlToPlainTextWithLineBreaks(blog?.description)
  );
  const [imageFile, setImageFile] = useState(null);

  const handleUpdateBlog = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("description", description);
    formData.append("imageFile", imageFile);
    try {
      const response = await fetch(`http://localhost:4000/blog/edit/${blog?._id}`, {
        method: "PUT",
        body: formData,
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      getAllBlogs();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
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
            h={"60vh"}
            resize={"none"}
            value={description}
            whiteSpace={"pre-wrap"}
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
        onClick={handleUpdateBlog}
      >
        Update Blog
      </Button>
    </Box>
  );
}

export default EditBlog;
