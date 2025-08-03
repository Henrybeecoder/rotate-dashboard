import { Box, Flex } from '@chakra-ui/react';
import { css } from "../../../../styled-system/css";
import TextBox from "@/components/ui/textBox";
import ExtraList from './extraList';
import type { ExtraListProps } from '@/types';
import RemediationTechnique from './remidiationTechniqueList';

export default function DescriptionSection({extraListData, isDark} : ExtraListProps) {
  // Dynamic styles based on dark mode
  const containerStyles = css({
    shadow: isDark ? "dark-description-card" : "description-card",
    background: isDark ? "gray.800" : "white",
    borderRadius: "28px",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
    border: isDark ? "1px solid" : "none",
    borderColor: isDark ? "gray.700" : "transparent",
  });

  const scrollAreaStyles = css({
    flex: "1",
    overflowY: "auto",
    overflowX: "hidden",
    scrollBehavior: "smooth",
    
    // Custom scrollbar styles for dark mode
    "&::-webkit-scrollbar": {
      width: "6px",
      display: "none",
    }
   
  });

  // Spacing and layout styles
  const sectionSpacing = css({
    marginTop: "24px",
  });

  return (
    <Box 
      p={"6"}
      w={{ base: '100%', lg: '30%' }}
      className={containerStyles}
      height='100vh'
    >
      <Box className={scrollAreaStyles}>
        {/* Main Description Section */}
        <TextBox 
          header={'Description'}
          content={'Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum.'}
       
        />
        
        {/* Extra Section */}
        <Box mt={'30px'} >
          <TextBox 
            header={'Extra'}
            content={'Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.'}
           
          />
        </Box>
        
        {/* Extra List Section */}
        <Box className={sectionSpacing}>
          <ExtraList 
            extraListData={extraListData} 
      isDark={isDark}
          />
        </Box>
        
        {/* Additional content area - reserved for future use */}
        <Box className={sectionSpacing}>
         <RemediationTechnique isDark={isDark}/>
        </Box>
      </Box>
    </Box>
  );
}