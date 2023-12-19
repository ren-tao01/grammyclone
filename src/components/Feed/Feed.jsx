import {
  Box,
  Container,
  Flex,
  VStack,
  SkeletonCircle,
  Skeleton,
} from "@chakra-ui/react";
import FeedPost from "./FeedPosts";
import { useEffect, useState } from "react";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"Container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
            </Flex>
            <VStack gap={2} alignItems={"flex-start"}>
              <SkeletonCircle height="10px" w={"200px"} />
              <SkeletonCircle height="10px" w={"200px"} />
            </VStack>

            <Skeleton w={"full"}>
              <Box h={"500px"}>Wrapped Content</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost
            img="/jenimg2.jpg"
            username="jennie"
            avatar="/jenimg2.jpg"
          />
          <FeedPost
            img="/tsimg1.jpg"
            username="taylorswift"
            avatar="/tsimg1.jpg"
          />
          <FeedPost
            img="/jenimg2.jpg"
            username="jennie"
            avatar="/jenimg2.jpg"
          />
        </>
      )}
    </Container>
  );
};

export default Feed;
