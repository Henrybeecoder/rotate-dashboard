'use client';
import { Box, Text } from "@chakra-ui/react";
import { css } from "../../../../styled-system/css";

import { useTheme } from '@/contexts/themeContext';

interface TextBoxProps {
  header: string;
  content: string;
}

export default function TextBox({ header, content }: TextBoxProps) {
  const { actualTheme } = useTheme();

 
  const headerColor = actualTheme === 'dark' ? 'primary.50' : 'primary.100';
  const contentColor = actualTheme === 'dark' ? 'secondary.500' : '#525D73';

  return (
    <Box>
      <Text
        className={css({
          color: headerColor,
          fontSize: "xl", 
          fontWeight: "bold",
          letterSpacing: "1%",
          mb: "2",
        })}
      >
        {header}
      </Text>
      <Text
      letterSpacing={'0.5px'}
      lineHeight={'21px'}
      mt={3}
        className={css({
          color: contentColor,
          fontSize: "xs", 
          fontWeight: "normal",
       
        })}
      >
        {content}
      </Text>
    </Box>
  );
}