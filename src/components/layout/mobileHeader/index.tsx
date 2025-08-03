import { motion } from 'framer-motion';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { css } from '../../../../styled-system/css';
import { ThemeToggle } from '@/components/theme/themeToggle';
import { MotionBox } from '@/utils';



export const MobileHeader = ({ 
  isDark, 
  onMenuToggle 
}: { 
  isDark: boolean; 
  onMenuToggle: () => void; 
}) => {
  return (
    <MotionBox
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg={isDark ? 'gray.800' : 'white'}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor={isDark ? 'gray.700' : 'gray.200'}
      px="16px"
      py="12px"
      height="60px"
      width="100vw"
    >
      <Flex justify="space-between" align="center" height="100%">
        <Box>
          <img 
            src="/logo.png" 
            alt="Logo" 
            className={css({ 
              height: "32px",
              width: "auto",
              filter: isDark ? "brightness(0) invert(1)" : "none",
            })} 
          />
        </Box>
        <Flex align="center" gap={2}>
          <ThemeToggle />
          <IconButton
            aria-label="toggle menu"
            onClick={onMenuToggle}
            variant="ghost"
            size="sm"
            color={isDark ? 'white' : 'black'}
            _hover={{
              bg: isDark ? 'gray.700' : 'gray.100',
            }}
          >
            <FaBars />
          </IconButton>
        </Flex>
      </Flex>
    </MotionBox>
  );
};