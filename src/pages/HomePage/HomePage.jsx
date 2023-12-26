import { Box, Flex, Container } from "@chakra-ui/react";
import { Feed } from "../../components/Feed/Feed";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={{ base: "container.sm", xl: "container.xl" }}>
      <Flex gap={20}>
        <Box flex={2} py={10} px={8}>
          <Feed></Feed>
        </Box>
        <Box
          flex={3}
          mx={10}
          display={{ base: "none", xl: "block" }}
          maxW={"315px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
