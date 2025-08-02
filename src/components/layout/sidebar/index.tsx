'use client';
import { css } from "../../../../styled-system/css";
import { useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { IconButton, Box, Text, Flex, VStack } from "@chakra-ui/react";

const menuItems = [
  { icon: "/assets/icons/sidebar-icons/dashboard-icon.svg", text: "Lorem" },
  { icon: "/assets/icons/sidebar-icons/alert-icon.svg", text: "Lorem" },
  { icon: "/assets/icons/sidebar-icons/box-icon.svg", text: "Lorem" },
  { icon: "/assets/icons/sidebar-icons/swing-icon.svg", text: "Lorem" },
  { icon: "/assets/icons/sidebar-icons/connect-icon.svg", text: "Lorem" },
  { icon: "/assets/icons/sidebar-icons/note-icon.svg", text: "Lorem" },
  { icon: "/assets/icons/sidebar-icons/graph-icon.svg", text: "Lorem" },
];

const lastmenuItems = [
  { icon: "/assets/icons/sidebar-icons/setting-icon.svg", text: "Lorem" },
  { icon: "/assets/icons/sidebar-icons/profile-icon.svg", text: "Lorem" },
];

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      py={6}
      px={4}
      className={css({
        position: "relative",
        shadow: "sidebar-card",
        background: "white",
        width: isExpanded ? "240px" : "80px",
        borderRadius: "28px",
        transition: "width 0.3s ease",
        height: "100vh",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
      })}
    >
      <Box>
        <img src={'/logo.png'} alt="Logo" className={css({ mb: '32px' })} />
      
        <IconButton
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          className={css({
            position: "absolute",
            right: "-16px",
            top: "32px",
            bg: "primary.100",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            minWidth: "32px",
            minHeight: "32px",
            padding: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: isExpanded ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.3s ease",
            _hover: {
              bg: "primary.100",
            },
          })}
        >
          <ChevronLeftIcon color="white" />
        </IconButton>
      </Box>

      <VStack 
        flex={1} 
        justifyContent="space-between" 
        className={css({ height: '100%' })}
      >
        <Box className={css({ display: "flex", flexDirection: "column", gap: "12px" })}>
        {menuItems.map((item) => (
              <Box
                key={item.text}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  _hover: {
                    bg: "#f9f9f9",
                    "& img": {
                      filter: "brightness(0) invert(0.4)",
                    },
                    "& p": {
                      color: "#525d73",
                    },
                  },
                  bg: activeItem === item.text ? "primary.50" : "transparent",
                })}
                onClick={() => setActiveItem(item.text)}
              >
                <img 
                  src={item.icon} 
                  alt={item.text} 
                  className={css({
                    width: "24px",
                    height: "24px",
                    transition: "filter 0.2s ease",
                  })}
                />
                {isExpanded && (
                  <Text
                    className={css({
                      fontSize: "md",
                      fontWeight: "medium",
                      color: activeItem === item.text ? "black" : "secondary.700",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    })}
                  >
                    {item.text}
                  </Text>
                )}
              </Box>
            ))}
        </Box>

        <Box className={css({ width: "full" })}>
          <Box className={css({ display: "flex", flexDirection: "column", gap: "12px", mb: "24px" })}>
            {lastmenuItems.map((item) => (
              <Box
                key={item.text}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  _hover: {
                    bg: "#f9f9f9",
                    "& img": {
                      filter: "brightness(0) invert(0.4)",
                    },
                    "& p": {
                      color: "#525d73",
                    },
                  },
                  bg: activeItem === item.text ? "primary.50" : "transparent",
                })}
                onClick={() => setActiveItem(item.text)}
              >
                <img 
                  src={item.icon} 
                  alt={item.text} 
                  className={css({
                    width: "24px",
                    height: "24px",
                    transition: "filter 0.2s ease",
                  })}
                />
                {isExpanded && (
                  <Text
                    className={css({
                      fontSize: "md",
                      fontWeight: "medium",
                      color: activeItem === item.text ? "black" : "secondary.700",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    })}
                  >
                    {item.text}
                  </Text>
                )}
              </Box>
            ))}
          </Box>

          <Box 
            className={css({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: "16px",
              borderTopWidth: "1px",
              borderTopColor: "gray.200",
            })}
          >
            <Flex gap={2} alignItems="center">
              <img 
                src="/assets/icons/sidebar-icons/real-profile.svg" 
                alt="Profile" 
                className={css({
                  width: "32px",
                  height: "32px",
                })}
              />
              {isExpanded && (
                <Box>
                  <Text fontSize="sm" fontWeight="medium">Lorem</Text>
                  <Text fontSize="xs" color="secondary.500">Lorem</Text>
                </Box>
              )}
            </Flex>
            {isExpanded && (
              <img 
                src="/assets/icons/sidebar-icons/logout-icon.svg" 
                alt="Logout" 
                className={css({
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                  _hover: {
                    opacity: 0.8,
                  },
                })}
              />
            )}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default SideBar;