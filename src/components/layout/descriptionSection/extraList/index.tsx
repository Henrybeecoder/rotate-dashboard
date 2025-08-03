'use client';
import { Box, Text, Flex } from '@chakra-ui/react';
import { css } from "../../../../../styled-system/css";
import { CheckIcon } from '@chakra-ui/icons';
import type { ExtraListProps } from '@/types';

export default function ExtraList({ extraListData }: ExtraListProps) {
  return (
    <Box mt={4} mb={2} py={4} borderTopWidth="1px" borderBottomWidth="1px" borderColor="gray.200">
      {extraListData.map((item) => (
        <Box 
          key={item.id} 
          p={2}
          borderRadius="md"
          mb={2}
          display="flex"
          alignItems="center"
          gap={4}
        >
          <Flex flex={1} alignItems="center" gap={2}>
            <Text
              fontSize="15px"
              lineHeight="22px"
              fontWeight="bold"
              letterSpacing="1%"
              color="secondary.800"
              flex={1}
            >
              {item.title}
            </Text>
            
            <Text
              fontSize="15px"
              fontWeight="medium"
              color="secondary.500"
              width="120px"
              textAlign="left"
            >
                {item.completed && (
              <CheckIcon
              color='#02983E' 
                
                flexShrink={0}
                width="15px"
                mr={2}
              />
            )}
              {item.paragraph}
            </Text>
          </Flex>
        </Box>
      ))}
    </Box>
  );
}