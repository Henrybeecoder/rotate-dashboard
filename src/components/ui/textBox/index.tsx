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

  // Define colors based on the actual theme
  const headerColor = actualTheme === 'dark' ? 'primary.50' : 'primary.100';
  const contentColor = actualTheme === 'dark' ? 'secondary.500' : 'secondary.700';

  return (
    <Box>
      <Text
        className={css({
          color: headerColor,
          fontSize: "xl", // 1.25rem (20px)
          fontWeight: "bold", // 700
          letterSpacing: "1%",
          mb: "2", // margin-bottom 0.5rem
        })}
      >
        {header}
      </Text>
      <Text
        className={css({
          color: contentColor,
          fontSize: "xs", // 0.75rem (12px)
          fontWeight: "normal", // 400
          letterSpacing: "1%",
        })}
      >
        {content}
      </Text>
    </Box>
  );
}