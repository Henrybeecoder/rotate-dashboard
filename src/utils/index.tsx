 import {  motion } from "framer-motion";
 import { Box, Flex, Circle } from "@chakra-ui/react";
 import {  } from "@chakra-ui/react";

 export const truncateText = (text: string, maxLength: number = 40) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}` : text;
  };

  export const MotionBox = motion(Box);

export const MotionFlex = motion(Flex);
export const MotionCircle = motion(Circle);
