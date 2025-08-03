import React, { useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import {css} from '../../../../styled-system/css';

import { SharedTable } from '../table';
import { TableColumn, TableData, PaginationInfo } from '@/types';

interface AssetData {
  id: string;
  name: string;
  ip: string;
  status: string;
  image: string;
}

interface AssetTableProps {
  data: AssetData[];
  itemsPerPage?: number;
  isDark: boolean;
}

export const AssetTable: React.FC<AssetTableProps> = ({
  data,
  itemsPerPage = 10,
  isDark
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns: TableColumn[] = [
    { key: 'asset', header: 'Asset', width: '60%' },
    { key: 'status', header: 'Contextual Risk', width: '40%' }
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const pagination: PaginationInfo = {
    currentPage,
    totalPages,
    totalItems: data.length,
    itemsPerPage
  };

  // Dynamic styles based on dark mode
  const containerStyles = css({
    width: '50%',
    transition: 'all 0.3s ease',
  });

  const nameStyles = css({
    color: isDark ? '#E2E8F0' : '#525D73',
    fontSize: '13px',
    fontWeight: '600',
    lineHeight: '13.5px',
    transition: 'color 0.3s ease',
  });

  const ipStyles = css({
    color: isDark ? '#A0AEC0' : '#667085',
    fontSize: '9.45px',
    lineHeight: '10.13px',
    fontWeight: '500',
    marginTop: '10px',
    transition: 'color 0.3s ease',
  });

  // Status styles with different variants based on status type
  const getStatusStyles = (status: string) => {
    const baseStyles = {
      padding: '10px 30px',
      borderRadius: 'lg',
      fontSize: '15px',
      fontWeight: '700',
      display: 'inline-block',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    };

    // You can customize these based on different status types
    switch (status.toLowerCase()) {
      case 'critical':
        return css({
          ...baseStyles,
          color: isDark ? '#FEB2B2' : '#C53030',
          backgroundColor: isDark ? '#742A2A' : '#FED7D7',
          border: isDark ? '1px solid #C53030' : 'none',
        });
      case 'high':
        return css({
          ...baseStyles,
          color: isDark ? '#FBD38D' : '#D69E2E',
          backgroundColor: isDark ? '#744210' : '#FEFCBF',
          border: isDark ? '1px solid #D69E2E' : 'none',
        });
      case 'medium':
        return css({
          ...baseStyles,
          color: isDark ? '#9AE6B4' : '#38A169',
          backgroundColor: isDark ? '#22543D' : '#C6F6D5',
          border: isDark ? '1px solid #38A169' : 'none',
        });
      case 'low':
        return css({
          ...baseStyles,
          color: isDark ? '#90CDF4' : '#3182CE',
          backgroundColor: isDark ? '#2A4365' : '#BEE3F8',
          border: isDark ? '1px solid #3182CE' : 'none',
        });
      default:
        return css({
          ...baseStyles,
          color: isDark ? '#FEB2B2' : '#C53030',
          backgroundColor: isDark ? '#742A2A' : '#FED7D7',
          border: isDark ? '1px solid #C53030' : 'none',
        });
    }
  };

  const renderCell = (key: string, value: any, row: TableData) => {
    if (key === 'asset') {
      return (
        <Flex align="center" gap="12px">
          <Box
            position="relative"
            // borderRadius="6px"
            // overflow="hidden"
            // bg={isDark ? 'gray.700' : 'gray.100'}
            // transition="background-color 0.3s ease"
          >
            <Image
              src={row.image}
              alt="Asset icon"
              width="40px"
              height="40px"
              // flexShrink={0}
              // filter={isDark ? 'brightness(1.1) contrast(1.1)' : 'none'}
              // transition="filter 0.3s ease"
            />
          </Box>
          <Box>
            <Text className={nameStyles}>{row.name}</Text>
            <Text className={ipStyles} mt={2}>{row.ip}</Text>
          </Box>
        </Flex>
      );
    }

    if (key === 'status') {
      return (
        <Box className={getStatusStyles(row.status)} width={20}>
          {row.status}
        </Box>
      );
    }

    return value;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box className={containerStyles}>
      <SharedTable
        columns={columns}
        data={paginatedData}
        pagination={pagination}
        onPageChange={handlePageChange}
        renderCell={renderCell}
        isDark={isDark} // Pass isDark to SharedTable if it supports dark mode
      />
    </Box>
  );
};