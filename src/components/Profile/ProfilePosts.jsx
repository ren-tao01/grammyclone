import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProfileSinglePost } from "./ProfileSinglePost";

export const ProfilePosts = () => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1.5}
      columnGap={1.5}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, ind) => (
          <VStack key={ind} alignItems={"flex-start"} gap={0}>
            <Skeleton w={"full"} pt={{base:"87%", lg:"93%"}}>
              <Box>
                Wrapped content
              </Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <ProfileSinglePost img="/jenimg2.jpg"></ProfileSinglePost>
          <ProfileSinglePost img="/jenimg2.jpg"></ProfileSinglePost>
          <ProfileSinglePost img="/jenimg2.jpg"></ProfileSinglePost>
          <ProfileSinglePost img="/jenimg2.jpg"></ProfileSinglePost>
        </>
      )}
    </Grid>
  );
};
