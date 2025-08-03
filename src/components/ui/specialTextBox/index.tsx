import { Box, Text, BoxProps, TextProps } from '@chakra-ui/react';

interface SpecialTextBoxProps extends BoxProps {
  width?: string;
  content: string;
  status: 'error' | 'neutral' | 'pending' | 'justAdded' | 'success';
  textProps?: TextProps;
}

export default function SpecialTextBox({ 
  width, 
  content, 
  status,
  textProps = {},
  ...boxProps 
}: SpecialTextBoxProps) {
  
  const statusStyles = {
    error: {
      bg: '#fff1f0',
      color: '#E5372B'
    },
    neutral: {
      bg: '#F2EDFF',
      color: '#6236CC'
    },
    pending: {
      bg: '#FFF9ED',
      color: '#EBA622'
    },
    justAdded: {
      bg: '#ECF5FF',
      color: '#0053B5'
    },
    success: {
      bg: '#E9FAF0',
      color: '#02983E'
    }
  };

  return (
    <Box
      className="font-mono"
      fontWeight="semibold"
      fontSize="13px"
      lineHeight="22px"
      letterSpacing="0.6px"
      p="8px 12px"
      borderRadius="md"
      w={width || 'auto'}
      {...statusStyles[status]}
      {...boxProps} 
    >
      <Text 
        fontFamily="var(--font-ibm-plex-mono)"
        {...textProps}
      >
        {content}
      </Text>
    </Box>
  );
}