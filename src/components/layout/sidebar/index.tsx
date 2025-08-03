'use client';
import { css } from "../../../../styled-system/css";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton, Box, Text, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

const menuItems = [
  { icon: "/assets/icons/sidebar-icons/dashboard-icon.svg", text: "Dashboard", href: "/dashboard" },
  { icon: "/assets/icons/sidebar-icons/alert-icon.svg", text: "Alerts", href: "/alerts" },
  { icon: "/assets/icons/sidebar-icons/box-icon.svg", text: "Products", href: "/products" },
  { icon: "/assets/icons/sidebar-icons/swing-icon.svg", text: "Analytics", href: "/analytics" },
  { icon: "/assets/icons/sidebar-icons/connect-icon.svg", text: "Connect", href: "/connect" },
  { icon: "/assets/icons/sidebar-icons/note-icon.svg", text: "Notes", href: "/notes" },
  { icon: "/assets/icons/sidebar-icons/graph-icon.svg", text: "Reports", href: "/reports" },
];

const lastmenuItems = [
  { icon: "/assets/icons/sidebar-icons/setting-icon.svg", text: "Settings", href: "/settings" },
  { icon: "/assets/icons/sidebar-icons/profile-icon.svg", text: "Profile", href: "/profile" },
];

const Tooltip = ({ children, text, show }: { children: React.ReactNode; text: string; show: boolean }) => (
  <Box position="relative" display="inline-block">
    {children}
    {show && (
      <Box
        className={css({
          position: "absolute",
          left: "calc(100% + 8px)",
          top: "50%",
          transform: "translateY(-50%)",
          bg: "green.500",
          color: "black",
          px: "8px",
          py: "4px",
          borderRadius: "4px",
          fontSize: "sm",
          fontWeight: "medium",
          whiteSpace: "nowrap",
          zIndex: 1000,
          opacity: 0,
          animation: "fadeIn 0.2s ease forwards",
          _before: {
            content: '""',
            position: "absolute",
            right: "100%",
            top: "50%",
            transform: "translateY(-50%)",
            borderWidth: "4px",
            borderStyle: "solid",
            borderColor: "transparent green.500 transparent transparent",
          },
        })}
      >
        {text}
      </Box>
    )}
  </Box>
);

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (isMobile) {
      setIsExpanded(false);
    } else {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const MenuItem = ({ item, isLast = false }: { item: typeof menuItems[0]; isLast?: boolean }) => (
    <Tooltip text={item.text} show={!isExpanded && hoveredItem === item.text && !isMobile}>
      <Link href={item.href}>
        <Box
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "12px",
            borderRadius: "12px",
            cursor: "pointer",
            minHeight: "48px",
            transition: "all 0.2s ease",
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
          onClick={() => {
            setActiveItem(item.text);
            if (isMobile) setMobileMenuOpen(false);
          }}
          onMouseEnter={() => setHoveredItem(item.text)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Box
            className={css({
              minWidth: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            })}
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
          </Box>
          {(isExpanded || (isMobile && mobileMenuOpen)) && (
            <Text
              className={css({
                fontSize: "md",
                fontWeight: "medium",
                color: activeItem === item.text ? "black" : "secondary.700",
                whiteSpace: "nowrap",
                overflow: "hidden",
                opacity: isExpanded || (isMobile && mobileMenuOpen) ? 1 : 0,
                transition: "opacity 0.3s ease",
              })}
            >
              {item.text}
            </Text>
          )}
        </Box>
      </Link>
    </Tooltip>
  );

  // Mobile Header
  if (isMobile) {
    return (
      <>
        {/* Mobile Header - Always visible */}
        <Box
          className={css({
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bg: "white",
            zIndex: 1000,
            borderBottom: "1px solid",
            borderColor: "gray.200",
            px: "16px",
            py: "12px",
            height: "60px",
          })}
        >
          <Flex justify="space-between" align="center" height="100%">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className={css({ 
                height: "32px",
                width: "auto"
              })} 
            />
            <IconButton
              aria-label="toggle menu"
              onClick={toggleSidebar}
              variant="ghost"
              size="sm"
            >
              <HamburgerIcon />
            </IconButton>
          </Flex>
        </Box>

        {/* Full Screen Mobile Sidebar */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <Box
              className={css({
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: "blackAlpha.600",
                zIndex: 1998,
              })}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Full Screen Sidebar */}
            <Box
              className={css({
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                bg: "white",
                zIndex: 1999,
                display: "flex",
                flexDirection: "column",
                animation: "slideInFromLeft 0.3s ease forwards",
              })}
            >
              {/* Mobile Sidebar Header */}
              <Box
                className={css({
                  px: "16px",
                  py: "12px",
                  borderBottom: "1px solid",
                  borderColor: "gray.200",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className={css({ 
                    height: "32px",
                    width: "auto"
                  })} 
                />
                <IconButton
                  aria-label="close menu"
                  onClick={() => setMobileMenuOpen(false)}
                  variant="ghost"
                  size="sm"
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Mobile Sidebar Content */}
              <Box
                className={css({
                  flex: 1,
                  px: "16px",
                  py: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                {/* Main Menu Items */}
                <Box
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  })}
                >
                  {menuItems.map((item) => (
                    <MenuItem key={item.text} item={item} />
                  ))}
                </Box>

                {/* Bottom Section */}
                <Box>
                  {/* Settings and Profile Menu Items */}
                  <Box
                    className={css({
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      mb: "24px",
                      pt: "16px",
                      borderTop: "1px solid",
                      borderColor: "gray.200",
                    })}
                  >
                    {lastmenuItems.map((item) => (
                      <MenuItem key={item.text} item={item} isLast />
                    ))}
                  </Box>

                  {/* User Profile Section */}
                  <Box
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pt: "16px",
                      borderTop: "1px solid",
                      borderColor: "gray.200",
                    })}
                  >
                    <Flex gap={3} alignItems="center" flex={1}>
                      <img 
                        src="/assets/icons/sidebar-icons/real-profile.svg" 
                        alt="Profile" 
                        className={css({
                          width: "40px",
                          height: "40px",
                          minWidth: "40px",
                        })}
                      />
                      <Box flex={1}>
                        <Text fontSize="md" fontWeight="medium">John Doe</Text>
                        <Text fontSize="sm" color="secondary.500">john@example.com</Text>
                      </Box>
                    </Flex>
                    <IconButton
                      aria-label="logout"
                      variant="ghost"
                      size="sm"
                      className={css({
                        minWidth: "32px",
                        width: "32px",
                        height: "32px",
                        _hover: {
                          opacity: 0.8,
                        },
                      })}
                    >
                      <img 
                        src="/assets/icons/sidebar-icons/logout-icon.svg" 
                        alt="Logout" 
                        className={css({
                          width: "18px",
                          height: "18px",
                        })}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </>
    );
  }

  // Desktop Sidebar
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
      {/* Logo - only show when expanded OR always show at top when collapsed */}
      <Box className={css({ mb: isExpanded ? "32px" : "24px" })}>
        {isExpanded ? (
          ''
        ) : (
          <Box className={css({ display: "flex", justifyContent: "center" })}>
            <img 
              src="/logo.png" 
              alt="Logo" 
              className={css({ 
                width: "32px", 
                height: "32px",
                objectFit: "contain"
              })} 
            />
          </Box>
        )}
      </Box>
      
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

      <VStack 
        flex={1} 
        justifyContent="space-between" 
        className={css({ height: '100%' })}
        spacing={0}
      >
        {/* Main Menu Items */}
        <Box className={css({ 
          display: "flex", 
          flexDirection: "column", 
          gap: "8px",
          width: "100%"
        })}>
          {menuItems.map((item) => (
            <MenuItem key={item.text} item={item} />
          ))}
        </Box>

        {/* Bottom Section */}
        <Box className={css({ width: "100%" })}>
          {/* Settings and Profile */}
          <Box className={css({ 
            display: "flex", 
            flexDirection: "column", 
            gap: "8px", 
            mb: "24px" 
          })}>
            {lastmenuItems.map((item) => (
              <MenuItem key={item.text} item={item} isLast />
            ))}
          </Box>

          {/* User Profile Section */}
          <Box 
            className={css({
              display: "flex",
              justifyContent: isExpanded ? "space-between" : "center",
              alignItems: "center",
              pt: "16px",
              borderTopWidth: "1px",
              borderTopColor: "gray.200",
            })}
          >
            <Flex gap={2} alignItems="center" flex={1}>
              <img 
                src="/assets/icons/sidebar-icons/real-profile.svg" 
                alt="Profile" 
                className={css({
                  width: "32px",
                  height: "32px",
                  minWidth: "32px",
                })}
              />
              {isExpanded && (
                <Box flex={1}>
                  <Text fontSize="sm" fontWeight="medium">John Doe</Text>
                  <Text fontSize="xs" color="secondary.500">john@example.com</Text>
                </Box>
              )}
            </Flex>
            {isExpanded && (
              <IconButton
                aria-label="logout"
                variant="ghost"
                size="sm"
                className={css({
                  minWidth: "24px",
                  width: "24px",
                  height: "24px",
                  _hover: {
                    opacity: 0.8,
                  },
                })}
              >
                <img 
                  src="/assets/icons/sidebar-icons/logout-icon.svg" 
                  alt="Logout" 
                  className={css({
                    width: "16px",
                    height: "16px",
                  })}
                />
              </IconButton>
            )}
          </Box>
        </Box>
      </VStack>

      {/* Add CSS keyframes for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default SideBar;