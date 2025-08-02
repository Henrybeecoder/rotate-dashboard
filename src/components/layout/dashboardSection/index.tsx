import { Box } from '@chakra-ui/react';
import { css } from "../../../../styled-system/css";
import TextBox from "@/components/ui/textBox";


export default function DashboardSection() {
  return (
    <Box 
    className={css({
        position: "relative",
        shadow: "dashboard-card",
        background: "white",
        width: '60%',
      minHeight: 'full',
        borderRadius: "28px",
        padding: "24px",
        transition: "width 0.3s ease",
    
      })}
    
    
    >
      dashboard section
      <Box>
    
      </Box>
    </Box>
  );
}