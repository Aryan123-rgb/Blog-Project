import React from "react";
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

function BlogPage() {
  const blogHeading = "The Latest Technology Trends in 2023";
  const authorName = "John Doe";
  const authorAvatarSrc = "https://via.placeholder.com/50";
  const brief =
    "Discover the hottest technology trends in 2023. From AI and blockchain to quantum computing, we explore the breakthroughs reshaping industries. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iusto maxime. Est aperiam ab temporibus eum quam fuga, sapiente nam facere laborum sint id debitis. Hic fugiat fuga commodi atque? Est aperiam ab temporibus eum quam fuga, sapiente nam facere laborum sint id debitis. Hic fugiat fuga commodi atque?";
  return (
    <>
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
            <Heading size="2xl">The perfect latte</Heading>
            <Text pt="1" color={"gray-200"}>
              {brief}
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
                  <Text size="sm">Segun Adebayo</Text>
                  <Text color={"gray-200"}>Creator, Chakra UI</Text>
                </Box>
              </Flex>
            </Flex>
          </CardFooter>
        </Stack>
      </Card>
      <Flex
        direction="row"
        align="center"
        justify="center"
        minHeight="100vh"
        bg={'bg'}
        p={8}
        w='100%'
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={12} // Spacing between blogs
          // maxW="1200px" // Set maximum width for the container
          width="80%" // Set the container to take 100% width of its parent
        >
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </Grid>
      </Flex>
    </>
  );
}

export default BlogPage;
