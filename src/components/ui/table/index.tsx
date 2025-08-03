

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
}

export const SharedTable: React.FC<SharedTableProps> = ({
  columns,
  data,
  pagination,
  onPageChange,
  renderCell
}) => {
  const tableStyles = css({
    backgroundColor: '#FFFFFF',
    border: '1px solid #F0F1F3',
    boxShadow: '0px 1px 3px 0px #0000000D, 0px 1px 2px 0px #0000001A',
    borderRadius: 'md'
  });

  const headerStyles = css({
    color: '#858D9D',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: '400',
    borderBottom: '1px solid #E0E2E7'
  });

  const cellStyles = css({
    padding: '12px 16px',
    paddingY: '60px',
    paddingX: '16px',
    borderBottom: '1px solid #E0E2E7'
  });

  return (
    <Box  className={css({
           
            width: '100%'
          })}
          >
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
        />
      )}
    </Box>
  );
};