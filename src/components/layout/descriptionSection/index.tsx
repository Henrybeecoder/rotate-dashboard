import { Box, Flex } from '@chakra-ui/react';
import { css } from "../../../../styled-system/css";
import TextBox from "@/components/ui/textBox";
import ExtraList from './extraList';
import type { ExtraListProps } from '@/types';

export default function DescriptionSection({extraListData} : ExtraListProps) {
  return (
    <Box
     p={"6"}
    className={css({
        shadow: "description-card",
        background: "white",
        width: '30%',
        height: '100vh', 
        borderRadius: "28px",
        display: "flex",
        flexDirection: "column",
    })}
         >
 
      <Box
        className={css({
          flex: "1",
          overflowY: "auto",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        
          "&::-webkit-scrollbar": {
            display: "none",
          },
      
          scrollbarWidth: "none",
        
        })}
      >
        <TextBox
           header={'Description'}
           content={'Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum.'}
         />
        <Box mt={"6"}>
           <TextBox
           header={'Extra'}
           content={'Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.'}
         />
        </Box>
        <Box>
         <ExtraList extraListData={extraListData} />
        </Box>
        
        <Box>
             
        </Box>
      </Box>
    </Box>
  );
}