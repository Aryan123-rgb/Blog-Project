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
import React, { useContext } from "react";
import { UserContext } from "../Context/ChatProvider";

function Blog({ blog }) {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
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
  return (
    <Card maxW="sm" bg={"bg"} color={"#f2f2fe"} borderWidth={1}>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="xl"> {blog?.title} </Heading>
          <Text color={"gray-200"}>{blog?.summary}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box display='flex' justifyContent='space-between'>
              <Box>
                <Text size="sm"> {blog?.author?.name} </Text>
                <Text color={"gray-200"}>
                  {blog?.author?.isAdmin ? "Admin" : "Author"},{" "}
                  {getTimeDifference(blog?.createdAt)}
                </Text>
              </Box>
            </Box>
            {loggedInUser?.isAdmin ? (
              <Button marginLeft="0" variant="solid" colorScheme="blue">
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
