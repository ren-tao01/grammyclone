import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import { SuggestedHeader } from "./SuggestedHeader";
import { SuggestedUser } from "./SuggestedUser";
import { Link } from "react-router-dom";

export const SuggestedUsers = () => {
  return (
    <VStack py={8} px={4} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"gray.500"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>

      <SuggestedUser
        name="Dan Steven"
        followers={3891}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Dan Steven"
        followers={3891}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Dan Steven"
        followers={3891}
        avatar="https://bit.ly/dan-abramov"
      />

      {/* target = _blank; is for opening new tab */}
      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2023 Built by{" "}
        <Link
          to={"https://www.linkedin.com/in/1rentaowan1/"}
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Ren T Wan
        </Link>
      </Box>
    </VStack>
  );
};
