import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Box,
  Avatar,
  Grid,
} from "@chakra-ui/react";
import Blog from "../components/Blog";
import { UserContext } from "../Context/ChatProvider";
import { useNavigate } from "react-router-dom";

function BlogPage() {
  const { blogs, featuredBlog } = useContext(UserContext);
  const navigate = useNavigate();

  const blogHeading = "The Latest Technology Trends in 2023";
  const authorName = "John Doe";
  const authorAvatarSrc = "https://via.placeholder.com/50";
  const brief =
    "Discover the hottest technology trends in 2023. From AI and blockchain to quantum computing, we explore the breakthroughs reshaping industries. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iusto maxime. Est aperiam ab temporibus eum quam fuga, sapiente nam facere laborum sint id debitis. Hic fugiat fuga commodi atque? Est aperiam ab temporibus eum quam fuga, sapiente nam facere laborum sint id debitis. Hic fugiat fuga commodi atque?";

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
    <>
      {featuredBlog ? (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          bg={"bg"}
          mx="auto"
          w="75%"
          my="3rem"
          color={"#f2f2fe"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "400px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack>
            <CardBody>
              <Heading
                size="2xl"
                _hover={{ color: "blue" }}
                cursor={"pointer"}
                onClick={() => navigate(`/blog/${featuredBlog?._id}`)}
              >
                {" "}
                {featuredBlog?.title}{" "}
              </Heading>
              <Text pt="1" color={"#dfe4ea"}>
                {featuredBlog?.summary}
              </Text>
            </CardBody>
            <CardFooter>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Box>
                    <Text size="sm"> {featuredBlog?.author?.name} </Text>
                    <Text color={"#dfe4ea"}>
                      {" "}
                      {featuredBlog?.author?.isAdmin ? "Admin" : "Author"},{" "}
                      {getTimeDifference(featuredBlog?.createdAt)}{" "}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Stack>
        </Card>
      ) : null}

      <Flex
        direction="row"
        align="center"
        justify="center"
        minHeight="80vh"
        bg={"bg"}
        // p={8}
        w="100%"
      >
        {blogs.length > 0 ? (
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={12} // Spacing between blogs
            // maxW="1200px" // Set maximum width for the container
            width="80%" // Set the container to take 100% width of its parent
          >
            {blogs.map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </Grid>
        ) : null}
      </Flex>
    </>
  );
}

export default BlogPage;
