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
}

export const AssetTable: React.FC<AssetTableProps> = ({
  data,
  itemsPerPage = 10
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

  const nameStyles = css({
    color: '#525D73',
    fontSize: '13px',
    fontWeight: '600',
    lineHeight: '13.5px'
  });

  const ipStyles = css({
    color: '#667085',
    fontSize: '9.45px',
    lineHeight: '10.13px',
    fontWeight: '500',
    marginTop: '10px',
  });

  const statusStyles = css({
    color: 'error.100',
    backgroundColor: 'error.50',
    padding: '10px 30px',
    borderRadius: 'lg',
    fontSize: '15px',
    fontWeight: '700',
    display: 'inline-block',
    textAlign: 'center',
  });

  const renderCell = (key: string, value: any, row: TableData) => {
    if (key === 'asset') {
      return (
        <Flex align="center" gap="12px">
          <Image
            src={row.image}
            alt="Asset icon"
            width="32px"
            height="32px"
            flexShrink={0}
          />
          <Box>
            <Text className={nameStyles}>{row.name}</Text>
            <Text className={ipStyles} mt={4}>{row.ip}</Text>
          </Box>
        </Flex>
      );
    }

    if (key === 'status') {
      return (
        <Box className={statusStyles}>
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
    <SharedTable
      columns={columns}
      data={paginatedData}
      pagination={pagination}
      onPageChange={handlePageChange}
      renderCell={renderCell}
    />
  );
};
