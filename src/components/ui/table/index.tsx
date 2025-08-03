import React from 'react';
import { Box, Table } from '@chakra-ui/react';
import {css} from '../../../../styled-system/css';
import { TableColumn, TableData, PaginationInfo } from '@/types';
import { Pagination } from '../pagination';

interface SharedTableProps {
  columns: TableColumn[];
  data: TableData[];
  pagination?: PaginationInfo;
  onPageChange?: (page: number) => void;
  renderCell?: (key: string, value: any, row: TableData) => React.ReactNode;
  isDark: boolean;
}

export const SharedTable: React.FC<SharedTableProps> = ({
  columns,
  data,
  pagination,
  onPageChange,
  renderCell,
  isDark,
}) => {
  const tableStyles = css({
    backgroundColor: isDark ? 'gray.800' : '#FFFFFF',
    border: isDark ? '1px solid token(colors.gray.600)' : '1px solid #F0F1F3',
    boxShadow: isDark 
      ? '0px 1px 3px 0px rgba(0,0,0,0.3), 0px 1px 2px 0px rgba(0,0,0,0.4)' 
      : '0px 1px 3px 0px #0000000D, 0px 1px 2px 0px #0000001A',
    borderTopRadius: '20px',
    transition: 'all 0.3s ease'
  });

  const headerStyles = css({
    color: isDark ? 'gray.300' : '#858D9D',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: '400',
    borderBottom: isDark ? '1px solid token(colors.gray.600)' : '1px solid #E0E2E7',
    backgroundColor: isDark ? 'gray.750' : 'transparent',
    transition: 'all 0.3s ease'
  });

  const cellStyles = css({
    padding: '12px 16px',
    paddingY: '60px',
    paddingX: '16px',
    borderBottom: isDark ? '1px solid token(colors.gray.600)' : '1px solid #E0E2E7',
    backgroundColor: isDark ? 'gray.800' : 'transparent',
    transition: 'all 0.3s ease',
    _hover: {
      backgroundColor: isDark ? 'gray.750' : 'gray.50'
    }
  });

  const containerStyles = css({
    height: '100%',
    borderTopRadius: '20px',
    width: '100%',
    
    backgroundColor: isDark ? 'gray.800' : 'transparent',
    transition: 'background-color 0.3s ease'
  });

  return (
    <Box className={containerStyles}>
      <Table.Root className={tableStyles}>
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeader
                key={column.key}
                className={headerStyles}
                width={column.width}
                textTransform="none"
                letterSpacing="normal"
                paddingY="12px"
                paddingX="16px"
              >
                {column.header}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((row, index) => (
            <Table.Row key={row.id || index}>
              {columns.map((column) => (
                <Table.Cell
                  key={column.key}
                  className={cellStyles}
                  py={6}
                  px={4}
                >
                  {renderCell 
                    ? renderCell(column.key, row[column.key], row)
                    : row[column.key]
                  }
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      
      {pagination && (
        <Pagination
          pagination={pagination}
          onPageChange={onPageChange}
          isDark={isDark}
        />
      )}
    </Box>
  );
};