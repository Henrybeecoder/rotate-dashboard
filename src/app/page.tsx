import { Box, Flex } from '@chakra-ui/react';
import { css } from '../../styled-system/css';
import ThemeToggleButton from "@/components/theme/themeToggle";
import SideBar from "@/components/layout/sidebar";
import DescriptionSection from "@/components/layout/descriptionSection";
import DashboardSection from "@/components/layout/dashboardSection";

export default function Home() {
  return (
    <Box className={css({
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      position: 'relative'
    })}>
      {/* Theme Toggle positioned absolutely */}
      <Box className={css({
        position: 'absolute',
        top: '4',
        right: '4',
        zIndex: '10'
      })}>
        <ThemeToggleButton />
      </Box>

      {/* Main layout */}
      <Flex className={css({
        width: 'full',
        height: 'full'
      })}>
        {/* Sidebar */}
        <SideBar />

        {/* Content area */}
        <Flex className={css({
          flex: '1',
          gap: '2',
          padding: '4',
          overflow: 'auto'
        })}>
          <DescriptionSection />
          <DashboardSection />
        </Flex>
      </Flex>
    </Box>
  );
}