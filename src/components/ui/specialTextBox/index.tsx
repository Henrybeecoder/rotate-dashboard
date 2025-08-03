import { Box, Text } from '@chakra-ui/react';

interface SpecialTextBoxProps {
  width?: string;
  content: string;
  status: 'error' | 'neutral' | 'pending' | 'justAdded' | 'success';
}

export default function SpecialTextBox({ width, content, status }: SpecialTextBoxProps) {
  // Define status styles using Chakra UI's style props
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
      className="ibm-plex-mono-semibold"
      fontWeight="semibold"
      fontSize="13px"
      lineHeight="22px"
      letterSpacing="0.6px"
      p="8px 12px"
      borderRadius="md"
      w={width || 'auto'}
      {...statusStyles[status]}
    >
      <Text>{content}</Text>
    </Box>
  );
}