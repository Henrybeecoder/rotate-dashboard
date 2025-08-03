
import React from 'react';
import { Box, Text, Flex, Circle } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import {css} from '../../../../styled-system/css'




// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionCircle = motion(Circle);

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

const containerVariants = {
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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  }
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 200,
      damping: 20,
      delay: 0.3
    }
  }
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const totalRisks = riskData.reduce((sum, item) => sum + item.count, 0);

export default function ContextualRiskGraph() {
  return (
    <MotionBox
      className={css({
        bg: 'white',
        border: '1.1px solid token(colors.gray.200)',
        boxShadow: 'dashboard-card',
        borderRadius: 'lg',
        p: 6,
        width: '100%'
      })}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.1)',
        transition: { duration: 0.2 }
      }}
    >
      <Text
        className={css({
          color: 'secondary.500',
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
        <MotionBox flex={1}>
          {riskData.map((risk, index) => (
            <MotionFlex
              key={risk.label}
              align="center"
              gap={3}
              my={3}
              variants={itemVariants}
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2 }
              }}
            >
              <MotionCircle
                size="8px"
                bg={risk.color}
                variants={circleVariants}
                whileHover={{ scale: 1.2 }}
                animate={risk.count > 0 ? 'pulse' : 'visible'}
                variants={risk.count > 0 ? pulseVariants : circleVariants}
              />
              
              <Text
                className={css({
                  color: 'secondary.800',
                  fontSize: 'md',
                  fontWeight: 'bold',
                  minW: '20px'
                })}
              >
                {risk.count}
              </Text>
              
              <Text
                className={css({
                  color: 'secondary.800',
                  fontSize: 'md',
                  fontWeight: 'normal'
                })}
              >
                {risk.label}
              </Text>
            </MotionFlex>
          ))}
        </MotionBox>

        {/* Central Risk Circle */}
        <MotionBox
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MotionCircle
            size="120px"
            border="3px solid"
            borderColor="#C6190D"
            bg="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            variants={circleVariants}
            whileHover={{ 
              scale: 1.05,
              borderColor: '#E5372B',
              transition: { duration: 0.3 }
            }}
            animate={totalRisks > 0 ? {
              borderColor: ['#C6190D', '#E5372B', '#C6190D'],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            } : {}}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Text
                className={css({
                  color: 'neutral.500',
                  fontSize: '35px',
                  fontWeight: 'semibold',
                  lineHeight: '1'
                })}
              >
                {totalRisks}
              </Text>
            </motion.div>
          </MotionCircle>

          {/* Animated Ring Effect for Active Risks */}
          {totalRisks > 0 && (
            <motion.div
              style={{
                position: 'absolute',
                width: '140px',
                height: '140px',
                border: '2px solid #C6190D',
                borderRadius: '50%',
                opacity: 0.3
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          )}
        </MotionBox>
      </Flex>
    </MotionBox>
  );
}