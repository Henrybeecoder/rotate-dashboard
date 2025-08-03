'use client';
import { Box, Flex } from '@chakra-ui/react';
import { css } from '../../styled-system/css';
import { useTheme } from '@/contexts/themeContext';
import SideBar from "@/components/layout/sidebar";
import HomePage from '@/screen/homepage';

export default function Home() {
  const { actualTheme } = useTheme();
  const isDark = actualTheme === 'dark';

  const baseLayoutStyles = css({
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: isDark ? 'gray.900' : 'gray.100',
    transition: 'background-color 0.3s ease',
  });

  const responsiveContentAreaStyles = css({
    flex: '1',
    gap: '4',
    padding: {
      base: 'spacing.16',
      md: 'spacing.24',
    },
    paddingTop: {
      base: '80px', // Account for mobile header
      md: 'spacing.24',
    },
    backgroundColor: isDark ? 'gray.900' : 'gray.100',
    color: isDark ? 'white' : 'black',
    transition: 'all 0.3s ease',
  });

  return (
    <Box className={baseLayoutStyles}>
      <Flex 
        className={css({
          width: 'full',
          height: 'full',
          backgroundColor: isDark ? 'gray.900' : 'gray.100',
          transition: 'background-color 0.3s ease',
        })}
      >
        <SideBar />
        
        <HomePage
          contentAreaStyles={responsiveContentAreaStyles}
          isDark={isDark}
        />
      </Flex>
    </Box>
  );
}