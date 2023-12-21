import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a President" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          asapresident_
        </Text>
      </Flex>
    
    <Link to={"/auth"}>
        {/* Can use text as well instead of Box, I cant see any visual difference */}
      <Box fontSize={14} fontWeight={"medium"}  color={"blue.400"} textDecoration={"none"} cursor={"pointer"}>
        Logout
      </Box>

    </Link>

    </Flex>
  );
};
