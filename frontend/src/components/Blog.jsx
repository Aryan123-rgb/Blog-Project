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
import React from "react";

function Blog({blog}) {
  console.log(blog);
  const getTimeDifference = (date) => {
    const now = new Date();
    const createdAt = new Date(date);
    const timeDifference = now - createdAt;

    if (timeDifference < 60 * 1000) {
      // Less than a minute ago
      const secondsAgo = Math.floor(timeDifference / 1000);
      return `${secondsAgo} ${secondsAgo === 1 ? "second" : "seconds"} ago`;
    } else if (timeDifference < 60 * 60 * 1000) {
      // Less than an hour ago
      const minutesAgo = Math.floor(timeDifference / (60 * 1000));
      return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
    } else if (timeDifference < 24 * 60 * 60 * 1000) {
      // Less than a day ago
      const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else {
      // More than a day ago
      const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
    }
  };
  return (
    <Card maxW="sm" bg={"bg"} color={"#f2f2fe"}>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="xl"> {blog?.title} </Heading>
          <Text color={"gray-200"}>
            {blog?.summary}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Text size="sm"> {blog?.author?.name} </Text>
              <Text color={"gray-200"}>{blog?.author?.isAdmin ? 'Admin' : 'Author'}, {getTimeDifference(blog?.createdAt)}</Text>
            </Box>
            <Button marginLeft="auto" variant="solid" colorScheme="blue">
              Feature
            </Button>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default Blog;
