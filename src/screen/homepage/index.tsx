'use client';
import { Box, Flex } from '@chakra-ui/react';
import { css } from '../../../styled-system/css';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/ui/loader';

import DescriptionSection from "@/components/layout/descriptionSection";
import DashboardSection from "@/components/layout/dashboardSection";
import { extraListData, assetTableData } from '@/lib/data';
import type { ListItem, AssetData, HomePageProps } from '@/types';


const fetchExtraListData = async (): Promise<ListItem[]> => {
  const delay = Math.random() * 1500 + 1500;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  if (Math.random() < 0.1) {
    throw new Error('Network error: Failed to fetch data');
  }
  
  return extraListData;
};

const fetchAssetTableData = async (): Promise<AssetData[]> => {
  const delay = Math.random() * 1200 + 800;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  if (Math.random() < 0.15) {
    throw new Error('Failed to fetch asset data');
  }
  
  return assetTableData;
};

export default function HomePage({ contentAreaStyles, isDark }: HomePageProps) {
  const {
    data: fetchedData,
    isLoading: isLoadingExtra,
    isError: isErrorExtra,
    error: errorExtra,
    refetch: refetchExtra
  } = useQuery({
    queryKey: ['extraListData'],
    queryFn: fetchExtraListData,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  const {
    data: assetTableData,
    isLoading: isLoadingAssets,
    isError: isErrorAssets,
    error: errorAssets,
    refetch: refetchAssets
  } = useQuery({
    queryKey: ['assetTableData'],
    queryFn: fetchAssetTableData,
    staleTime: 3 * 60 * 1000,
    gcTime: 8 * 60 * 1000,
    retry: 2,
    retryDelay: attemptIndex => Math.min(500 * 2 ** attemptIndex, 15000),
  });

  const darkModeStyles = css({
    backgroundColor: isDark ? 'gray.900' : 'gray.100',
    color: isDark ? 'white' : 'black',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  });

  const flexContainerStyles = css({
    marginLeft: '20px',
    backgroundColor: isDark ? 'gray.800' : 'white',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: isDark 
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' 
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
  });

  const isLoading = isLoadingExtra || isLoadingAssets;
  
  if (isLoading) {
    return (
      <Box className={`${contentAreaStyles} ${darkModeStyles}`}>
        <Loader isVisible={true} />
      </Box>
    );
  }


  return (
    <Box className={`${contentAreaStyles} ${darkModeStyles}`}>
      <Flex
        className={flexContainerStyles}
        direction={{ base: 'column', lg: 'row' }}
        gap="24px"
      >
        <DescriptionSection 
          extraListData={fetchedData || []} 
          isDark={isDark}
        />
        <DashboardSection 
          isDark={isDark}
          assetTableData={assetTableData || []}
        />
      </Flex>
    </Box>
  );
}