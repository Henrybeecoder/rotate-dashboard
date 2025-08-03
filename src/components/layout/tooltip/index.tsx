import { Box } from "@chakra-ui/react";
import { MotionBox } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { css } from "../../../../styled-system/css";
const Tooltip = ({ children, text, show, isDark }: { 
  children: React.ReactNode; 
  text: string; 
  show: boolean;
  isDark?: boolean;
}) => (
  <Box position="relative" display="inline-block">
    {children}
    <AnimatePresence>
      {show && (
        <MotionBox
          initial={{ opacity: 0, x: -10, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -10, scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={css({
            position: "absolute",
            left: "calc(100% + 8px)",
            top: "50%",
            transform: "translateY(-50%)",
            bg: isDark ? "gray.700" : "primary.50",
            color: isDark ? "white" : 'gray.700',
            px: "8px",
            py: "4px",
            borderRadius: "4px",
            fontSize: "sm",
            fontWeight: "medium",
            whiteSpace: "nowrap",
            zIndex: 1000,
            _before: {
              content: '""',
              position: "absolute",
              right: "100%",
              top: "50%",
              transform: "translateY(-50%)",
              borderWidth: "4px",
              borderStyle: "solid",
              borderColor: isDark ? "transparent token(colors.gray.700) transparent transparent" : "transparent token(colors.gray.800) transparent transparent",
            },
          })}
        >
          {text}
        </MotionBox>
      )}
    </AnimatePresence>
  </Box>
);


export default Tooltip;