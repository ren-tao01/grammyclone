import { Box, Flex, Avatar, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  ExploreLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  ReelsLogo,
  SearchLogo,
} from "../../assets/constants";

import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const sideBarItems = [
    { icon: <AiFillHome size={25} />, text: "Home", link: "/" },
    { icon: <SearchLogo />, text: "Search" },
    { icon: <ExploreLogo />, text: "Explore"},
    { icon: <ReelsLogo />, text: "Reels"},
    { icon: <NotificationsLogo />, text: "Notifications" },
    { icon: <CreatePostLogo />, text: "Create" },
    {
      icon: <Avatar size={"sm"} name="Barracks" src="profilepic.png" />,
      text: "Profile",
      link: "asapresident",
    },
  ];
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Box pl={2} cursor="pointer" display={{ base: "none", md: "block" }}>
          <RouterLink to={"/"}>
            <InstagramLogo />
          </RouterLink>
        </Box>

        <Box
          p={2}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor="pointer"
          display={{ base: "block", md: "none" }}
        >
          <RouterLink to={"/"}>
            <InstagramMobileLogo />
          </RouterLink>
        </Box>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sideBarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <RouterLink to={item.link || null}>
                <Box
                  p={2}
                  height={"full"}
                  gap={4}
                  display={"flex"}
                  _hover={{ bg: "whiteAlpha.400" }}
                  borderRadius={6}
                  w={{ base: 10, md: "full" }}
                  justifyContent={{ base: "center", md: "flex-start" }}
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "flex" }}>{item.text}</Box>
                </Box>
              </RouterLink>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <RouterLink to={"/auth"} style={{ marginTop: "auto" }}>
            <Box
              p={2}
              h={"full"}
              gap={4}
              display={"flex"}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              w={{ base: 10, md: "full" }}
              mt={"auto"}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Box>
                <BiLogOut size={25} />
              </Box>
              <Box display={{ base: "none", md: "block" }}>Logout</Box>
            </Box>
          </RouterLink>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
