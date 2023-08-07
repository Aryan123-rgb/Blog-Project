import { Flex, Grid } from "@chakra-ui/react";
import React, { useContext } from "react";
import Blog from "../components/Blog";
import { UserContext } from "../Context/ChatProvider";

function SavedBlog() {
    const {bookmarkedBlogs} = useContext(UserContext);
    console.log(bookmarkedBlogs);
  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      minHeight="80vh"
      bg={"bg"}
      w="100%"
      mt={10}
    >
      {bookmarkedBlogs?.length > 0 ? (
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={12} // Spacing between blogs
          // maxW="1200px" // Set maximum width for the container
          width="80%" // Set the container to take 100% width of its parent
        >
          {bookmarkedBlogs?.map((blog) => (
            <Blog key={blog?._id} blog={blog} />
          ))}
        </Grid>
      ) : null}
    </Flex>
  );
}

export default SavedBlog;
