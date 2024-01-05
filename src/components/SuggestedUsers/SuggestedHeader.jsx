import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a President" size={"md"} src="/profilepic.png" />
        <VStack spacing={0} alignItems={"flex-start"}>
          <Box fontSize={13} fontWeight={"bold"}>
            lil_samurai
          </Box>
          <Box fontSize={12} color={"gray.500"}>
            {/* {followers} followers */}
            Real Name is None
          </Box>
        </VStack>
      </Flex>

      <Link to={"/auth"}>
        {/* Can use text as well instead of Box, I cant see any visual difference */}
        <Box
          fontSize={14}
          fontWeight={"medium"}
          color={"blue.400"}
          textDecoration={"none"}
          cursor={"pointer"}
        >
          Logout
        </Box>
      </Link>
    </Flex>
  );
};
