'use client';
import { Box, Flex } from '@chakra-ui/react';
import { css } from '../../../styled-system/css';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/ui/loader';
import SideBar from "@/components/layout/sidebar";
import DescriptionSection from "@/components/layout/descriptionSection";
import DashboardSection from "@/components/layout/dashboardSection";
import { extraListData } from '@/lib/data';

interface ListItem {
  id: string;
  title: string;
  paragraph: string;
  completed: boolean;
}

interface HomePageProps {
  contentAreaStyles: string;
}


const fetchExtraListData = async (): Promise<ListItem[]> => {
  const delay = Math.random() * 1500 + 1500;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  if (Math.random() < 0.1) {
    throw new Error('Network error: Failed to fetch data');
  }
  
  return extraListData;
};

export default function HomePage({ contentAreaStyles }: HomePageProps) {
  const {
    data: fetchedData,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['extraListData'],
    queryFn: fetchExtraListData,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  if (isLoading) {
    return <Loader isVisible={true}  />;
  }

 

  return (
  
      <Flex
        style={{ marginLeft: '20px' }}
        className={contentAreaStyles}
         direction={{ base: 'column', lg: 'row' }}
      >
        <DescriptionSection extraListData={fetchedData || []} />
        <DashboardSection />
      </Flex>
    
  );
}