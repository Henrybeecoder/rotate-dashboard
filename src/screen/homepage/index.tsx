+'use client';
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
  isDark: boolean;
}

const fetchExtraListData = async (): Promise<ListItem[]> => {
  const delay = Math.random() * 1500 + 1500;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  if (Math.random() < 0.1) {
    throw new Error('Network error: Failed to fetch data');
  }
  
  return extraListData;
};

export default function HomePage({ contentAreaStyles, isDark }: HomePageProps) {
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

  // Dark mode styles
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

  if (isLoading) {
    return (
      <Box className={`${contentAreaStyles} ${darkModeStyles}`}>
        <Loader isVisible={true} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box className={`${contentAreaStyles} ${darkModeStyles}`}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="50vh"
          className={css({
            backgroundColor: isDark ? 'red.900' : 'red.50',
            borderRadius: '12px',
            padding: '24px',
            border: `1px solid ${isDark ? '#DC2626' : '#FCA5A5'}`,
          })}
        >
          <Box
            className={css({
              fontSize: 'xl',
              fontWeight: 'bold',
              color: isDark ? 'red.300' : 'red.600',
              mb: '16px',
            })}
          >
            Error Loading Data
          </Box>
          <Box
            className={css({
              color: isDark ? 'red.200' : 'red.500',
              mb: '24px',
              textAlign: 'center',
            })}
          >
            {error?.message || 'Something went wrong'}
          </Box>
          <button
            onClick={() => refetch()}
            className={css({
              backgroundColor: isDark ? 'red.600' : 'red.500',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'medium',
              transition: 'background-color 0.2s ease',
              _hover: {
                backgroundColor: isDark ? 'red.700' : 'red.600',
              },
            })}
          >
            Try Again
          </button>
        </Flex>
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
        />
      </Flex>
    </Box>
  );
}