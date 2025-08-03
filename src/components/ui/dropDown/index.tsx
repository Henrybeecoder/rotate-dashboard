'use client';
import { useState } from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { truncateText } from '@/utils';
import type { DropdownProps } from '@/types';

export default function Dropdown({ data, isDark = false }: DropdownProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <Box>
      {data?.map((item) => (
        <Box
          key={item.id}
          w="full"
          bg={isDark ? 'gray.800' : 'white'}
          border="1px solid"
          borderColor={isDark ? 'gray.600' : 'gray.200'}
          borderRadius="15px"
          py="8px"
          px="16px"
          cursor="pointer"
          transition="all 0.2s ease"
          mb="14px"
          boxShadow={isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)'}
          _hover={{
            borderColor: isDark ? 'gray.500' : 'gray.300',
            transform: 'translateY(-1px)',
          }}
          onClick={() => toggleExpanded(item.id)}
        >
          <Text
            letterSpacing={'0.6px'}
            fontSize="15px"
            fontWeight="700"
            lineHeight="22px"
            color={isDark ? 'gray.100' : 'gray.900'}
          >
            {item.title}
          </Text>

          <Flex
            my="14px"
            bg={isDark ? 'gray.700' : 'gray.50'}
            borderRadius="8px"
            px="12px"
            py="8px"
            justify="space-between"
            align="stretch"
            minH="66px"
          >
            <Flex align="center" gap="8px" flex="1">
              <Image
                src={item.image}
                alt={item.title}
                boxSize="50px"
                filter={isDark ? 'brightness(1.2)' : 'none'}
              />
              <Box>
                <Text
                  color={isDark ? 'gray.300' : 'gray.600'}
                  fontWeight="600"
                  fontSize="12.15px"
                  lineHeight="13.5px"
                >
                  {item.server_name}
                </Text>
                <Text
                  fontWeight="500"
                  fontSize="9.45px"
                  color={isDark ? 'gray.400' : 'gray.500'}
                  lineHeight="10.13px"
                  mt="4px"
                >
                  {item.server_name}
                </Text>
              </Box>
            </Flex>

            <Box
              width="1px"
              bg={isDark ? 'gray.500' : 'gray.400'}
              mx="12px"
              alignSelf="stretch"
            />

            <Flex
              align="center"
              flex="1"
            >
              <Text
                fontWeight="400"
                color={isDark ? 'gray.300' : 'gray.600'}
                fontSize="13px"
                lineHeight="22px"
                textAlign="left"
              >
                {truncateText(item.text)}
              </Text>
            </Flex>
          </Flex>

          <Box
            maxH={expandedItems.has(item.id) ? "200px" : "0"}
            opacity={expandedItems.has(item.id) ? 1 : 0}
            overflow="hidden"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            transform={expandedItems.has(item.id) ? "translateY(0)" : "translateY(-10px)"}
          >
            <Text
              color={isDark ? 'gray.200' : 'gray.700'}
              fontSize="15px"
              fontWeight="400"
              lineHeight="24px"
              mt="12px"
              mb="4px"
            >
              {item.text}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}