import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

export const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex
        borderTop={"1px solid white"}
        alignItems={"center"}
        p={3}
        gap={1}
        cursor={"pointer"}
      >
        <Box fontSize={12} display={{ base: "none", sm: "block" }}>
          <BsGrid3X3 fontWeight={"bold"}/>
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          POSTS
        </Text>
      </Flex>

      <Flex
        borderTop={"1px solid white"}
        alignItems={"center"}
        p="3"
        gap={1}
        cursor={"pointer"}
      >
        <Box fontSize={12} display={{ base: "none", sm: "block" }}>
          <BsBookmark fontWeight={"bold"}/>
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          SAVED
        </Text>
      </Flex>
      <Flex
        borderTop={"1px solid white"}
        alignItems={"center"}
        p="3"
        gap={1}
        cursor={"pointer"}
      >
        <Box fontSize={12} display={{ base: "none", sm: "block" }}>
          <BsSuitHeart fontWeight={"bold"} />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          LIKES {/* TAGGED */}
        </Text>
      </Flex>
    </Flex>
  );
};
