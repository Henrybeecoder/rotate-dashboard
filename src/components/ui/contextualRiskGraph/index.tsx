import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { motion, Variants, Transition } from 'framer-motion';
import { css } from '../../../../styled-system/css';

// Define proper types for the variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  }
};

// Define the spring transition type explicitly
const springTransition: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
  delay: 0.3,
  duration: 1.2
};

const circleVariants: Variants = {
  hidden: { 
    scale: 0, 
    opacity: 0,
    rotate: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 360,
    transition: springTransition
  }
};

const riskData = [
  { 
    label: 'Critical', 
    count: 2, 
    color: '#C6190D', 
    bgToken: 'error.100'
  },
  { 
    label: 'High', 
    count: 0, 
    color: '#E5372B', 
    bgToken: 'error.100'
  },
  { 
    label: 'Medium', 
    count: 0, 
    color: '#EBA622', 
    bgToken: 'warning.100'
  },
  { 
    label: 'Low', 
    count: 0, 
    color: '#08B94E', 
    bgToken: 'success.100'
  }
];

const totalRisks = riskData.reduce((sum, item) => sum + item.count, 0);

export default function ContextualRiskGraph({ isDark = false }) {
  const containerStyles = css({
    bg: isDark ? 'gray.800' : 'white',
    border: isDark ? '1.1px solid token(colors.gray.700)' : '1.1px solid token(colors.gray.200)',
    boxShadow: isDark ? 'dark-dashboard-card' : 'dashboard-card',
    borderRadius: '20px',
    width: { base: '100%', lg: '47%' },
    height: '100%',
    transition: 'all 0.3s ease',
  });

  const titleColor = isDark ? 'gray.100' : 'secondary.500';
  const textColor = isDark ? 'gray.200' : 'secondary.800';
  const circleTextColor = isDark ? 'gray.100' : 'neutral.500';
  const circleBorderColor = totalRisks > 0 ? '#C6190D' : (isDark ? '#4A5568' : '#E2E8F0');

  return (
    <motion.div
      className={containerStyles}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        boxShadow: isDark 
          ? '0px 4px 12px 0px rgba(0,0,0,0.3)' 
          : '0px 4px 12px 0px rgba(0,0,0,0.1)',
        transition: { duration: 0.2 }
      }}
    >
      <Box p={6}>
        <Text
          className={css({
            color: titleColor,
            fontSize: 'lg',
            fontWeight: 'medium',
            lineHeight: '28px',
            mb: 4
          })}
        >
          Contextual Risk
        </Text>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'stretch', lg: 'center' }}
          justify="space-between"
          gap={8}
        >
          {/* Risk Items List */}
          <Box flex={1}>
            {riskData.map((risk) => (
              <motion.div
                key={risk.label}
                variants={itemVariants}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <Flex align="center" gap={3} my={3}>
                  <motion.div
                    variants={circleVariants}
                    whileHover={{ scale: 1.2 }}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: risk.color
                    }}
                  />
                  
                  <Text
                    className={css({
                      color: textColor,
                      fontSize: 'md',
                      fontWeight: 'bold',
                      minW: '20px'
                    })}
                  >
                    {risk.count}
                  </Text>
                  
                  <Text
                    className={css({
                      color: textColor,
                      fontSize: 'md',
                      fontWeight: 'normal'
                    })}
                  >
                    {risk.label}
                  </Text>
                </Flex>
              </motion.div>
            ))}
          </Box>

          {/* Central Risk Circle */}
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <motion.div
              variants={circleVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: totalRisks > 0 ? '#E5372B' : (isDark ? '#718096' : '#CBD5E0'),
                transition: { duration: 0.3 }
              }}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '7px solid',
                borderColor: circleBorderColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Text
                  className={css({
                    color: circleTextColor,
                    fontSize: '35px',
                    fontWeight: 'semibold',
                    lineHeight: '1'
                  })}
                >
                  {totalRisks}
                </Text>
              </motion.div>
            </motion.div>
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
}