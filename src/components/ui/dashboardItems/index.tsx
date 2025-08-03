import { HoverTooltip } from "../hoverTooltip";
import { css } from '../../../../styled-system/css';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import type { DashboardItemProps } from "@/types";
const DashboardItem: React.FC<DashboardItemProps> = ({
  imageSrc,
  altText,
  label,
  tooltipContent,
  tooltipPosition, 
  ip
}) => {
  return (
    <Box className={dashboardItemStyle}>
      <HoverTooltip
        content={tooltipContent}
        manualPosition={tooltipPosition}
        showArrow={false}
        width="250px"
      >
        <Flex className={dashboardItemContentStyle} direction="column" align="center">
          <Image 
            src={imageSrc}
            alt={altText}
            width="50px"
            height="50px"
            className={dashboardIconStyle}
          />
          <Text className={dashboardLabelStyle}>{label}</Text>
          {ip && <Text fontSize="xs" color="gray.500">{ip}</Text>}
        </Flex>
      </HoverTooltip>
    </Box>
  );
};

const dashboardItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  borderRadius: 'md',
  cursor: 'pointer',
  _hover: {
    bg: 'gray.100',
    _dark: {
      bg: 'gray.700'
    }
  },
  transition: 'background-color 0.2s'
});

const dashboardItemContentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.25rem'
});

const dashboardIconStyle = css({
  width: '70px',
  height: '70px',
  objectFit: 'contain'
});

const dashboardLabelStyle = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: { base: 'gray.700', _dark: 'gray.200' },
  textAlign: 'center',
  maxWidth: '100px',


  whiteSpace: 'nowrap'
});


export default DashboardItem;