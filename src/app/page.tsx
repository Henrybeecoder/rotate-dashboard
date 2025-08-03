import { Box, Flex } from '@chakra-ui/react';
import { css } from '../../styled-system/css';
import SideBar from "@/components/layout/sidebar";
import HomePage from '@/screen/homepage';

const baseLayoutStyles = css({
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  backgroundColor: 'gray.100',
});


const responsiveContentAreaStyles = css({
  flex: '1',
  gap: '4',
  padding: {
    base: 'spacing.16', 
    md: 'spacing.24',   
  },
  paddingTop: {
    base: '80px',       
    md: 'spacing.24',   
  },
});

export default function Home() {
  return (
    <Box className={baseLayoutStyles}>
      <Flex className={css({
        width: 'full',
        height: 'full'
      })}>
        <SideBar />
        
        <HomePage
          contentAreaStyles={responsiveContentAreaStyles}
        />
      </Flex>
    </Box>
  );
}