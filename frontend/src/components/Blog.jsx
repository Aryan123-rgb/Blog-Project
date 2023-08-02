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

function Blog() {
  return (
    <Card maxW="sm" bg={"bg"} color={"#f2f2fe"}>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="xl">Living room Sofa</Heading>
          <Text color={"gray-200"}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Text size="sm">Segun Adebayo</Text>
              <Text color={"gray-200"}>Creator, Chakra UI</Text>
            </Box>
            <Button marginLeft="2.5rem" variant="solid" colorScheme="blue">
              Feature
            </Button>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default Blog;
