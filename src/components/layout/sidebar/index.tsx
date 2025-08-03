'use client';
import { css } from "../../../../styled-system/css";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaTimes } from "react-icons/fa";
import { IconButton, Box, Text, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useTheme } from '@/contexts/themeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from "@/components/theme/themeToggle";
import { MobileHeader } from "../mobileHeader";
import Tooltip from "../tooltip";
import { MotionBox } from "@/utils";

const menuItems = [
  { icon: "/assets/icons/sidebar-icons/dashboard-icon.svg", text: "Dashboard", href: "/dashboard" },
  { icon: "/assets/icons/sidebar-icons/alert-icon.svg", text: "Alerts", href: "/alerts" },
  { icon: "/assets/icons/sidebar-icons/box-icon.svg", text: "Products", href: "/products" },
  { icon: "/assets/icons/sidebar-icons/swing-icon.svg", text: "Analytics", href: "/" },
  { icon: "/assets/icons/sidebar-icons/connect-icon.svg", text: "Connect", href: "/connect" },
  { icon: "/assets/icons/sidebar-icons/note-icon.svg", text: "Notes", href: "/notes" },
  { icon: "/assets/icons/sidebar-icons/graph-icon.svg", text: "Reports", href: "/reports" },
];

const lastmenuItems = [
  { icon: "/assets/icons/sidebar-icons/setting-icon.svg", text: "Settings", href: "/settings" },
  { icon: "/assets/icons/sidebar-icons/profile-icon.svg", text: "Profile", href: "/profile" },
];





const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { actualTheme } = useTheme();
  
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDark = actualTheme === 'dark';

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
    <Tooltip text={item.text} show={!isExpanded && hoveredItem === item.text && !isMobile} isDark={isDark}>
      <Link href={item.href}>
        <MotionBox
          whileHover={{ 
            backgroundColor: isDark ? "rgba(55, 65, 81, 0.8)" : "rgba(243, 244, 246, 0.8)"
          }}
          whileTap={{ scale: 0.98 }}
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: isExpanded ? "flex-start" : "center",
            gap: isExpanded ? "16px" : "0",
            padding: isExpanded ? "12px" : "12px 8px",
            borderRadius: "12px",
            cursor: "pointer",
            minHeight: "48px",
            transition: "all 0.2s ease",
            bg: activeItem === item.text ? (isDark ? "gray.600" : "primary.50") : "transparent",
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
                filter: isDark ? "brightness(0) invert(0.8)" : "brightness(0) invert(0.4)",
              })}
            />
          </Box>
          {isExpanded || (isMobile && mobileMenuOpen) ? (
            <Text
              className={css({
                fontSize: "md",
                fontWeight: "medium",
                color: activeItem === item.text 
                  ? (isDark ? "white" : "black") 
                  : (isDark ? "gray.300" : "secondary.700"),
                whiteSpace: "nowrap",
                overflow: "hidden",
              })}
            >
              {item.text}
            </Text>
          ) : null}
        </MotionBox>
      </Link>
    </Tooltip>
  );

  if (isMobile) {
    return (
      <>
        <MobileHeader isDark={isDark} onMenuToggle={toggleSidebar} />

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                position="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.600"
                zIndex={1998}
                onClick={() => setMobileMenuOpen(false)}
              />
              
              <MotionBox
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                position="fixed"
                top={0}
                left={0}
                bottom={0}
                right={0}
                bg={isDark ? 'gray.800' : 'white'}
                zIndex={1999}
                display="flex"
                flexDirection="column"
              >
                <Box
                  px="16px"
                  py="12px"
                  borderBottom="1px solid"
                  borderColor={isDark ? 'gray.700' : 'gray.200'}
                  height="60px"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className={css({ 
                      height: "32px",
                      width: "auto",
                      filter: isDark ? "brightness(0) invert(1)" : "none",
                    })} 
                  />
                  <IconButton
                    aria-label="close menu"
                    onClick={() => setMobileMenuOpen(false)}
                    variant="ghost"
                    size="sm"
                    color={isDark ? 'white' : 'black'}
                    _hover={{
                      bg: isDark ? 'gray.700' : 'gray.100',
                    }}
                  >
                    <FaTimes/>
                  </IconButton>
                </Box>

                <Box
                  flex={1}
                  px="16px"
                  py="24px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap="8px"
                  >
                    {menuItems.map((item) => (
                      <MenuItem key={item.text} item={item} />
                    ))}
                  </Box>

                  <Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      gap="8px"
                      mb="24px"
                      pt="16px"
                      borderTop="1px solid"
                      borderColor={isDark ? 'gray.700' : 'gray.200'}
                    >
                      {lastmenuItems.map((item) => (
                        <MenuItem key={item.text} item={item} isLast />
                      ))}
                    </Box>

                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      pt="16px"
                      borderTop="1px solid"
                      borderColor={isDark ? 'gray.700' : 'gray.200'}
                    >
                      <Flex gap={3} alignItems="center" flex={1}>
                        <img 
                          src="/assets/icons/sidebar-icons/real-profile.svg" 
                          alt="Profile" 
                          className={css({
                            width: "40px",
                            height: "40px",
                            minWidth: "40px",
                            filter: isDark ? "brightness(0) invert(0.8)" : "none",
                          })}
                        />
                        <Box flex={1}>
                          <Text 
                            fontSize="md" 
                            fontWeight="medium"
                            color={isDark ? "white" : "black"}
                          >
                            John Doe
                          </Text>
                          <Text 
                            fontSize="sm" 
                            color={isDark ? "gray.400" : "secondary.500"}
                          >
                            john@example.com
                          </Text>
                        </Box>
                      </Flex>
                      <IconButton
                        aria-label="logout"
                        variant="ghost"
                        size="sm"
                        minWidth="32px"
                        width="32px"
                        height="32px"
                        color={isDark ? 'white' : 'black'}
                        _hover={{
                          opacity: 0.8,
                          bg: isDark ? 'gray.700' : 'gray.100',
                        }}
                      >
                        <img 
                          src="/assets/icons/sidebar-icons/logout-icon.svg" 
                          alt="Logout" 
                          className={css({
                            width: "18px",
                            height: "18px",
                            filter: isDark ? "brightness(0) invert(0.8)" : "none",
                          })}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <MotionBox
      animate={{
        width: isExpanded ? "240px" : "80px"
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      py={6}
      px={4}
      className={css({
        position: "relative",
        shadow: "sidebar-card",
        background: isDark ? "gray.800" : "white",
        borderRadius: "28px",
        height: "100vh",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
      })}
    >
      {!isExpanded && (
        <Box className={css({ 
          mb: "32px",
          display: "flex", 
          justifyContent: "center",
          alignItems: "center",
          height: "40px"
        })}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            className={css({ 
              width: "32px", 
              height: "32px",
              objectFit: "contain",
              filter: isDark ? "brightness(0) invert(1)" : "none",
            })} 
          />
        </Box>
      )}

      {isExpanded && (
        <Box className={css({
          mb: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40px"
        })}>
          <ThemeToggle />
        </Box>
      )}
      
      {!isExpanded && (
        <Box className={css({
          display: "flex",
          justifyContent: "center",
          mb: "16px"
        })}>
          <ThemeToggle />
        </Box>
      )}
      
      <IconButton
        aria-label="toggle sidebar"
        onClick={toggleSidebar}
        position="absolute"
        right="-16px"
        top="32px"
        bg="#02983E"
        borderRadius="50%"
        width="32px"
        height="32px"
        minWidth="32px"
        minHeight="32px"
        padding="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{
          bg: "#02983E",
        }}
      >
        <FaChevronLeft color="white" />
      </IconButton>

      <VStack 
        flex={1} 
        justifyContent="space-between" 
        className={css({ height: '100%' })}
      >
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

        <Box className={css({ width: "100%" })}>
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

          <Box 
            display="flex"
            justifyContent={isExpanded ? "space-between" : "center"}
            alignItems="center"
            pt="16px"
            borderTop="1px solid"
            borderColor={isDark ? 'gray.700' : 'gray.200'}
          >
            <Flex gap={2} alignItems="center" flex={1} justify={isExpanded ? "flex-start" : "center"}>
              <img 
                src="/assets/icons/sidebar-icons/real-profile.svg" 
                alt="Profile" 
                className={css({
                  width: "32px",
                  height: "32px",
                  minWidth: "32px",
                  filter: isDark ? "brightness(0) invert(0.8)" : "none",
                })}
              />
              {isExpanded && (
                <Box flex={1}>
                  <Text 
                    fontSize="sm" 
                    fontWeight="medium"
                    color={isDark ? "white" : "black"}
                  >
                    Lorem
                  </Text>
                  <Text 
                    fontSize="xs" 
                    color={isDark ? "gray.400" : "secondary.500"}
                  >
                    Lorem
                  </Text>
                </Box>
              )}
            </Flex>
            {isExpanded && (
              <IconButton
                aria-label="logout"
                variant="ghost"
                size="sm"
                minWidth="24px"
                width="24px"
                height="24px"
                color={isDark ? 'white' : 'black'}
                _hover={{
                  opacity: 0.8,
                  bg: isDark ? 'gray.700' : 'gray.100',
                }}
              >
                <img 
                  src="/assets/icons/sidebar-icons/logout-icon.svg" 
                  alt="Logout" 
                  className={css({
                    width: "16px",
                    height: "16px",
                    filter: isDark ? "brightness(0) invert(0.8)" : "none",
                  })}
                />
              </IconButton>
            )}
          </Box>
        </Box>
      </VStack>
    </MotionBox>
  );
};

export default SideBar;