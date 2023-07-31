import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Authentication() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index) => {
    setSelectedTab(index);
  };
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="bg"
        w="100%"
        m="40px 0 15px 0"
      >
        <Text fontSize={"4xl"} color={"#f2f2fe"}>
          {selectedTab === 0 ? "Welcome back" : "Get Started"}
        </Text>
      </Box>
      <Box bg={"bg"} w={"100%"} p={4}>
        <Tabs
          isFitted
          variant={"soft-rounded"}
          index={selectedTab}
          onChange={handleTabChange}
        >
          <TabList mb={"1em"}>
            <Tab color={"#f2f2fe"} _selected={{ color: '#f2f2fe', bg: 'primary-variant' }}>
              Login
            </Tab>
            <Tab color={"#f2f2fe"} _selected={{ color: '#f2f2fe', bg: 'primary-variant' }}>
              Signup
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Authentication;
