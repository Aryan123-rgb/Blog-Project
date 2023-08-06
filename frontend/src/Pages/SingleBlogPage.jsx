import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
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
  const { blogs, loggedInUser } = useContext(UserContext);
  const blog = blogs.find((blog) => blog._id === id);
  console.log(blog);
  console.log(loggedInUser);
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
              <Stack direction="row" spacing={4} ml={'auto'} mr={'2rem'}>
                <Button variant="solid" color={'#f2f2fe'} bg={'primary'} _hover={{bg:'primary-variant'}}>
                  Edit
                </Button>
                <Button variant="solid" color={'#f2f2fe'} bg={'red'} _hover={{opacity:'0.8'}}>
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
