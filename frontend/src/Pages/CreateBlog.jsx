import React from 'react'
import { Box, Flex, Heading, Input, Textarea, Button } from '@chakra-ui/react';

function CreateBlog() {
  return (
    <Box p={4}>
    <Box bg="blue.500" p={4}>
      <Heading color="white">Create Blog</Heading>
    </Box>

    {/* Blog Form */}
    <Flex direction="column" mt={8}>
      <Input
        name="heading"
        // value={blogData.heading}
        // placeholder="Blog Heading"
        // onChange={handleInputChange}
        mb={4}
      />
      <Textarea
        name="summary"
        // value={blogData.summary}
        // placeholder="Blog Summary"
        // onChange={handleInputChange}
        mb={4}
      />
      <Textarea
        name="brief"
        // value={blogData.brief}
        // placeholder="Blog Brief"
        // onChange={handleInputChange}
        mb={4}
      />
      {/* <input type="file" onChange={handleImageChange} accept="image/*" /> */}
      {/* You can add additional form elements for the blog image */}
    </Flex>

    {/* Submit Button */}
    <Button colorScheme="blue" mt={4}>
      Create Blog
    </Button>
  </Box>
  )
}

export default CreateBlog