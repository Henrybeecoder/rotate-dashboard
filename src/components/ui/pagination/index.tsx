import React from 'react';
import { Box, Text, Flex, IconButton } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PaginationInfo } from '@/types';

interface PaginationProps {
  pagination: PaginationInfo;
  onPageChange?: (page: number) => void;
  isDark: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  pagination,
  onPageChange,
  isDark
}) => {
  const { currentPage, totalItems, itemsPerPage, totalPages } = pagination;
  
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

 

  return (
    <Box
      bg={isDark ? 'gray.800' : 'white'}
      borderWidth="1.1px"
      borderColor={isDark ? 'gray.600' : 'gray.200'}
      boxShadow={isDark ? 'dark-lg' : 'sm'}
      width="100%"
      padding="6px 16px"
      borderTop={isDark ? '1px solid' : '1px solid'}
      borderTopColor={isDark ? 'gray.600' : '#E0E2E7'}
      borderBottomRadius="20px"
      transition="all 0.3s ease"
    >
      <Flex justify='center' align="center">
        <IconButton
          aria-label="Previous page"
         
          variant="ghost"
          size="sm"
          onClick={handlePrevious}
         
          color={isDark ? 'gray.300' : '#667085'}
          _hover={{
            bg: isDark ? 'gray.700' : 'gray.100',
            color: isDark ? 'white' : 'gray.800'
          }}
          _disabled={{
            opacity: 0.4,
            cursor: 'not-allowed'
          }}
          transition="all 0.2s ease"
        >
          <FaChevronLeft />
          </IconButton>

        <Text
          color={isDark ? 'gray.300' : '#667085'}
          fontWeight="400"
          fontSize="13px"
          textAlign="center"
        >
          Showing {startItem}-{endItem} of {totalItems}
        </Text>

        <IconButton
          aria-label="Next page"
         
          variant="ghost"
          size="sm"
          onClick={handleNext}
       
          color={isDark ? 'gray.300' : '#667085'}
          _hover={{
            bg: isDark ? 'gray.700' : 'gray.100',
            color: isDark ? 'white' : 'gray.800'
          }}
          _disabled={{
            opacity: 0.4,
            cursor: 'not-allowed'
          }}
          transition="all 0.2s ease"
        >
          <FaChevronRight />
          </IconButton>
      </Flex>
    </Box>
  );
};