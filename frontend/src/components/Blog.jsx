import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
  Avatar,
  Box,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { UserContext } from "../Context/ChatProvider";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

function Blog({ blog }) {
  const { loggedInUser, featuredBlog, setFeaturedBlog,getBookMarkedBlogs } =
    useContext(UserContext);
  const navigate = useNavigate();
  const [isBlogBookmarked, setIsBlogBookmarked] = useState(false);

  const getTimeDifference = (date) => {
    const now = new Date();
    const createdAt = new Date(date);
    const timeDifference = now - createdAt;

    if (timeDifference < 60 * 1000) {
      const secondsAgo = Math.floor(timeDifference / 1000);
      return `${secondsAgo} ${secondsAgo === 1 ? "second" : "seconds"} ago`;
    } else if (timeDifference < 60 * 60 * 1000) {
      const minutesAgo = Math.floor(timeDifference / (60 * 1000));
      return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
    } else if (timeDifference < 24 * 60 * 60 * 1000) {
      const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else {
      const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
    }
  };

  const handleToggleFeaturedBlog = async () => {
    try {
      const response = await fetch("http://localhost:4000/blog/togglefeature", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToBeFeatured: blog?._id,
          loggedInUserId: loggedInUser?._id,
        }),
        credentials: "include",
      });
      const data = await response.json();
      setFeaturedBlog(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookMarkBlog = async () => {
    if (isBlogBookmarked === false) {
      try {
        const response = await fetch(
          "http://localhost:4000/bookmark/addBookmark",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idToBeBookmarked: blog?._id,
              loggedInUserId: loggedInUser?._id,
            }),
            credentials: "include",
          }
        );
        const data = await response.json();
        getBookMarkedBlogs();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch(
          "http://localhost:4000/bookmark/removeBookmark",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idToBeRemoved: blog?._id,
              loggedInUserId: loggedInUser?._id,
            }),
            credentials: "include",
          }
        );
        const data = await response.json();
        getBookMarkedBlogs();
      } catch (error) {
        console.log(error);
      }
    }
    setIsBlogBookmarked(!isBlogBookmarked);
  };
  return (
    <Card maxW="sm" bg={"bg"} color={"#f2f2fe"} borderWidth={1}>
      <Box position="absolute" top={4} right={3}>
        <Button
          size="lg"
          variant="ghost"
          colorScheme="blue"
          onClick={handleBookMarkBlog}
          aria-label="Bookmark Blog"
        >
          {isBlogBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </Button>
      </Box>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading
            size="xl"
            onClick={() => navigate(`/blog/${blog._id}`)}
            cursor={"pointer"}
            _hover={{ color: "blue" }}
            w={"fit-content"}
          >
            {" "}
            {blog?.title}{" "}
          </Heading>
          <Text color={"#dfe4ea"}>{blog?.summary}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Text size="sm"> {blog?.author?.name} </Text>
                <Text color={"gray-200"}>
                  {blog?.author?.isAdmin ? "Admin" : "Author"},{" "}
                  {getTimeDifference(blog?.createdAt)}
                </Text>
              </Box>
            </Box>
            {loggedInUser?.isAdmin ? (
              <Button
                marginLeft="0"
                variant="solid"
                backgroundColor={"primary"}
                _hover={{ backgroundColor: "primary-variant" }}
                onClick={handleToggleFeaturedBlog}
              >
                Feature
              </Button>
            ) : null}
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default Blog;
