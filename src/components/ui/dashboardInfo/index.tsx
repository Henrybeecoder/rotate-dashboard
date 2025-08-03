'use client'

import { css } from '../../../../styled-system/css';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import type { DashboardInfoProps } from "@/types";
import DashboardItem from "../dashboardItems";
import SpecialTextBox from "../specialTextBox";


const DashboardInfo = ({ isDark }: DashboardInfoProps) => {
  const statusItems = [
    { image: '/assets/images/dashboard-info/error-icon.svg', color: '#E5372B', text: 'Lorem' },
    { image: '/assets/images/dashboard-info/pending-icon.svg', color: '#FF9500', text: 'Lorem' },
    { image: '/assets/images/dashboard-info/success-icon.svg', color: '#02983E', text: 'Lorem' }
  ];

  return (
    <Box py={4} px={4} className={dashboardContainerStyle} bg={isDark ? 'gray.800' : 'gray.50'}>
      <Flex align="center" gap={2} >
        <DashboardItem
          imageSrc="/assets/images/dashboard-info/profile.svg"
          altText="User profile"
          label="Lorem ipsum"
          tooltipContent={
          <Box>
            <SpecialTextBox status="error" content="Lorem Ipsum Dolor Sit" width="50%"/>
            </Box>}
          tooltipPosition={{ top: '50px', left: '60px' }}
        />
        
        <Image src="/assets/images/dashboard-info/arrow.svg" alt="arrow" />
        
        <DashboardItem
          imageSrc="/assets/images/dashboard-info/server-icon.svg"
          altText="Server"
          label="Lorem ipsum"
          tooltipContent={<Box>Server information</Box>}
          tooltipPosition={{ top: '50px', left: '60px' }}
        />
        
        <Image src="/assets/images/dashboard-info/arrow.svg" alt="arrow" />
        
        <DashboardItem
          imageSrc="/assets/images/dashboard-info/server-icon.svg"
          altText="Server"
          label="Lorem ipsum"
          tooltipContent={<Box>Server information</Box>}
          tooltipPosition={{ top: '50px', left: '60px' }}
        />
        
        <Image src="/assets/images/dashboard-info/arrow-connect.svg" alt="connection" />
        
        <Flex direction="column" gap={5}>
          <DashboardItem
            imageSrc="/assets/images/dashboard-info/server-cancelled.svg"
            altText="Cancelled server"
            label="Loremipsumdolorsit"
            ip="192.168.1.1"
            tooltipContent={<Box>Server details</Box>}
            tooltipPosition={{ top: '50px', left: '60px' }}
          />
          <DashboardItem
            imageSrc="/assets/images/dashboard-info/server-cancelled.svg"
            altText="Cancelled server"
            label="Loremipsumdolorsit002"
            ip="192.168.1.2"
            tooltipContent={<Box>Server details</Box>}
            tooltipPosition={{ top: '50px', left: '60px' }}
          />
        </Flex>
      </Flex>

      <Flex direction={{ base: 'column', lg: 'row' }} gap={3} mt={4} py={2} borderTop={'1px solid #E0E2E7'}>
        {statusItems.map((item, index) => (
          <Flex key={index} align="center" gap={2}>
            <Image src={item.image} alt={`status-${index}`} />
            <Text 
              color={item.color}
              fontWeight="bold"
              fontSize="15px"
              lineHeight="38px"
            >
              {item.text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};




const dashboardContainerStyle = css({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: 'lg',
  transition: 'background-color 0.2s'
});



export default DashboardInfo;