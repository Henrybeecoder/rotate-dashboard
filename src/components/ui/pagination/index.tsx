import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import {css} from '../../../../styled-system/css';
import { PaginationInfo } from '@/types';

interface PaginationProps {
  pagination: PaginationInfo;
  onPageChange?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  pagination
}) => {
  const { currentPage, totalItems, itemsPerPage } = pagination;
  
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const paginationStyles = css({
    color: '#667085',
    fontWeight: '400',
    fontSize: '13px',
    padding: '12px 16px',
    borderTop: '1px solid #E0E2E7'
  });

  return (
    <Box className={paginationStyles}>
      <Text>
        Showing {startItem}-{endItem} of {totalItems}
      </Text>
    </Box>
  );
};