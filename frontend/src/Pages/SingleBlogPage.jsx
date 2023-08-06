import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Image,
  Heading,
  Text,
  Avatar,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { UserContext } from "../Context/ChatProvider";

function SingleBlogPage() {
  const { id } = useParams();
  const { blogs, loggedInUser , getAllBlogs} = useContext(UserContext);
  const blog = blogs.find((blog) => blog._id === id);
  const navigate = useNavigate();

  const handleDeleteBlog = async() => {
    const response = await fetch("http://localhost:4000/blog/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id : id }),
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
    getAllBlogs();
    navigate('/');
  }

  return (
    <Box maxWidth="800px" mx="auto" mt={8} p={4}>
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      />
      <Heading mt={4} size="xl" color={"#f2f2fe"}>
        {blog?.title}
      </Heading>
      <Flex mt={6} align="center">
        <Avatar name={blog?.author?.name} src={blog?.author?.avatarUrl} />
        <Box ml={3}>
          <Text color={"gray-200"}>{blog?.author?.name}</Text>
          <Text color="gray.600" fontSize="sm">
            {blog?.author?.isAdmin ? "Admin" : "Author"},{" "}
            {new Date(blog?.createdAt).toLocaleString()}
          </Text>
        </Box>
        {loggedInUser &&
          (loggedInUser?.isAdmin ||
            loggedInUser?._id === blog?.author?._id) && (
            <Stack direction="row" spacing={4} ml={"auto"} mr={"2rem"}>
              <Button
                variant="solid"
                color={"#f2f2fe"}
                bg={"primary"}
                _hover={{ bg: "primary-variant" }}
                onClick={()=>navigate(`/edit/${blog._id}`)}
              >
                Edit
              </Button>
              <Button
                variant="solid"
                color={"#f2f2fe"}
                bg={"red"}
                _hover={{ opacity: "0.8" }}
                onClick={handleDeleteBlog}
              >
                Delete
              </Button>
            </Stack>
          )}
      </Flex>
      <Text
        mt={8}
        color={"gray-300"}
        dangerouslySetInnerHTML={{ __html: blog?.description }}
      ></Text>
    </Box>
  );
}

export default SingleBlogPage;
