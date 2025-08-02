import { css } from "../../../../styled-system/css";
import { useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { IconButton, Box, Text } from "@chakra-ui/react";

const menuItems = [
  { icon: "/assets/icons/sidebar-icons/dashboard-icon.svg", text: "Dashboard" },
//   { icon: "/assets/icons/sidebar-icons/analytics-icon.svg", text: "Analytics" },
//   { icon: "/assets/icons/sidebar-icons/settings-icon.svg", text: "Settings" },
];

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      className={css({
        position: "relative",
        shadow: "custom-card",
        background: "white",
        width: isExpanded ? "240px" : "80px",
        borderRadius: "28px",
        padding: "24px",
        transition: "width 0.3s ease",
        height: "100vh",
      })}
    >
      {/* Toggle Button */}
      <IconButton
        aria-label="Toggle sidebar"
        icon={<ChevronLeftIcon color="white" />}
        onClick={toggleSidebar}
        className={css({
          position: "absolute",
          right: "-16px",
          top: "32px",
          bg: "primary.100",
          borderRadius: "full",
          width: "32px",
          height: "32px",
          transform: isExpanded ? "rotate(0deg)" : "rotate(180deg)",
          transition: "transform 0.3s ease",
          _hover: {
            bg: "primary.100",
          },
        })}
      />

      {/* Menu Items */}
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
                bg: "error.50",
                "& img": {
                  filter: "brightness(0)",
                },
                "& p": {
                  color: "black",
                },
              },
              bg: activeItem === item.text ? "error.50" : "transparent",
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
    </Box>
  );
};

export default SideBar;