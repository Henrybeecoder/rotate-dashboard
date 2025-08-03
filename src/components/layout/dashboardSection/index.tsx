import { Box, Flex, Text } from '@chakra-ui/react';
import { css } from "../../../../styled-system/css";
import TextBox from "@/components/ui/textBox";
import { HoverTooltip } from '@/components/ui/hoverTooltip';
import { HoverTooltipExample } from '@/components/ui/hoverTooltip';
import { AssetTable } from '@/components/ui/assetTable';
import ContextualRiskGraph from '@/components/ui/contextualRiskGraph';
import DashboardInfo from '@/components/ui/dashboardInfo';

export default function DashboardSection({isDark, assetTableData}) {


  const containerStyles = css({
    position: "relative",
    boxShadow: isDark ? "dark-dashboard-card" : "dashboard-card",
    bg: isDark ? "gray.800" : "white",
    width: '60%',
    minH: 'full',
    borderRadius: "28px",
    p: 6,
    transition: "all 0.3s ease",
    border: isDark ? "1px solid" : "none",
    borderColor: isDark ? "gray.700" : "transparent",
  });

  const titleColor = isDark ? 'gray.100' : 'token(colors.primary.100)';

  return (
    <Box
      p={"6"}
      className={containerStyles}
    >
       <Text
         className={css({
    color: isDark ? 'gray.100' : 'primary.100'
  })}
        fontWeight={700}
        fontSize={'20px'}
        lineHeight={'22px'}
        letterSpacing={'0.6px'}
        my={2}
        transition="color 0.3s ease"
      >
        Lorem Lorem Lorem
      </Text>
<DashboardInfo />
      <Text
         className={css({
    color: isDark ? 'gray.100' : 'primary.100'
  })}
        fontWeight={700}
        fontSize={'20px'}
        lineHeight={'22px'}
        letterSpacing={'0.6px'}
        my={2}
        transition="color 0.3s ease"
      >
        Lorem ipsum dolor sit
      </Text>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={3}
        height={'270px'}
      >
        <AssetTable data={assetTableData} isDark={isDark} />
        <ContextualRiskGraph isDark={isDark} />
      </Flex>
    </Box>
  );
}