import { Box, Flex } from '@chakra-ui/react';
import { css } from "../../../../styled-system/css";
import TextBox from "@/components/ui/textBox";
import { HoverTooltip } from '@/components/ui/hoverTooltip';
import { HoverTooltipExample } from '@/components/ui/hoverTooltip';
import { AssetTable } from '@/components/ui/assetTable';
import ContextualRiskGraph from '@/components/ui/contextualRiskGraph';

export default function DashboardSection() {
  const assetTableData = [
    {
      id: '1',
      name: 'Loremipsumdolorsit',
      ip: '192.168.1.1',
      status: 'Critical',
      image: '/assets/images/table/asset-server.svg'
    },
    {
      id: '2',
      name: 'Loremipsumdolorsit',
      ip: '192.168.1.2',
      status: 'Critical',
      image: '/assets/images/table/asset-server.svg'
    }
  ];

  return (
    <Box
      className={css({
        position: "relative",
        boxShadow: "dashboard-card",
        bg: "white",
        width: '60%',
        minH: 'full',
        borderRadius: "28px",
        p: 6,
        transition: "width 0.3s ease",
      })}
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={3}
       
      >
        <AssetTable data={assetTableData} />
        <ContextualRiskGraph />
      </Flex>
    </Box>
  );
}