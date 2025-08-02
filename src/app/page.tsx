import { Box, Flex } from '@chakra-ui/react';
import { css } from '../../styled-system/css';
import SideBar from "@/components/layout/sidebar";
import DescriptionSection from "@/components/layout/descriptionSection";
import DashboardSection from "@/components/layout/dashboardSection";

import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/ui/loader';
import HomePage from '@/screen/homepage';


const baseLayoutStyles = css({
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  backgroundColor: 'gray.100',
});

const contentAreaStyles = css({
  flex: '1',
  gap: '4',
  padding: 'spacing.24',
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
          contentAreaStyles={contentAreaStyles}
         
        />
      </Flex>
    </Box>
  );
}





