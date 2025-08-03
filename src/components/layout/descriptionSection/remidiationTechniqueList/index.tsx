'use client';
import { Box, Text } from '@chakra-ui/react';
import Dropdown from '@/components/ui/dropDown';
import type { DropdownItem } from '@/types';

interface RemediationTechniqueProps {
  isDark?: boolean;
}

const remediationData: DropdownItem[] = [
  {
    id: '1',
    title: 'Lorem P',
    server_name: 'Server',
    text: 'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.',
    image: '/assets/images/table/asset-server.svg'
  },
  {
    id: '2',
    title: 'Lorem s',
    server_name: 'Server',
    text: 'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
    image: '/assets/images/table/asset-server.svg'
  },
  {
    id: '3',
    title: 'Lorem T',
    server_name: 'Server',
    text: 'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.',
    image: '/assets/images/table/asset-server.svg'
  },
];

export default function RemediationTechnique({ isDark = false }: RemediationTechniqueProps) {
  return (
    <Box
   
  
 
    >
      <Text
      letterSpacing={'0.6px'}
        fontSize="15px"
        fontWeight="700"
        mb="10px"
        mt='8px'
        lineHeight={'22px'}
        color={isDark ? 'gray.100' : '#334155'}
      >
       Lorem ipsum dolor sit
      </Text>
      
      <Dropdown 
        data={remediationData} 
        isDark={isDark}
       
      />
    </Box>
  );
}