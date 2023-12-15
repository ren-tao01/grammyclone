import { Box, Flex, Container } from "@chakra-ui/react";
import Feed from "../../components/Feed/Feed";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10} border={"1px solid blue"}>
          <Feed></Feed>
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
