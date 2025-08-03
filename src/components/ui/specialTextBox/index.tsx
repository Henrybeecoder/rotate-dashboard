import { Box, Text } from '@chakra-ui/react';
import { css } from '../../../../styled-system/css';

interface SpecialTextBoxProps {
  width?: string;
  content: string;
  status: 'error' | 'neutral' | 'pending' | 'justAdded' | 'success';
}

export default function SpecialTextBox({ width, content, status }: SpecialTextBoxProps) {
  // Define status styles using the actual color values from your config
  const statusStyles = {
    error: {
      bg: '#fff1f0', // error.50
      color: '#E5372B' // error.100
    },
    neutral: {
      bg: '#F2EDFF', // purple.50
      color: '#6236CC' // purple.100
    },
    pending: {
      bg: '#FFF9ED', // warning.50
      color: '#EBA622' // warning.100
    },
    justAdded: {
      bg: '#ECF5FF', // blue.50
      color: '#0053B5' // blue.100
    },
    success: {
      bg: '#E9FAF0', // success.50
      color: '#02983E' // primary.100
    }
  };

  const textBoxStyle = css({
    fontFamily: 'mono',
    fontWeight: 'semibold',
    fontSize: '13px',
    lineHeight: '22px',
    letterSpacing: '0.6px',
    padding: '8px 12px',
    borderRadius: 'md',
    width: width || 'auto',
    backgroundColor: statusStyles[status].bg,
    color: statusStyles[status].color
  });

  return (
    <Box className={textBoxStyle}>
      <Text>{content}</Text>
    </Box>
  );
}