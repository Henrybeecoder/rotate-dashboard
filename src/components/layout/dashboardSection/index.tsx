import { Box } from '@chakra-ui/react';
import { css } from "../../../../styled-system/css";
import TextBox from "@/components/ui/textBox";
import { HoverTooltip } from '@/components/ui/hoverTooltip';
import { HoverTooltipExample } from '@/components/ui/hoverTooltip';


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
    

<HoverTooltip
  content="This appears on hover!"
  position="bottom"
>
<p>Hover me</p>
</HoverTooltip>

<HoverTooltip
  content="This appears on hover!"
  position="bottom"
>
<p>Hover me</p>
</HoverTooltip>

<HoverTooltip
  content="This appears on hover!"
  position="bottom"
>
<p>Hover me</p>
</HoverTooltip>

<HoverTooltip 
  content={
    <div>
      <h3>Title</h3>
      <p>Description</p>
      <button>Click me</button>
    </div>
  }
>
  <img src="image.jpg" />
</HoverTooltip>
<HoverTooltipExample />
      <Box>
    
      </Box>
    </Box>
  );
}