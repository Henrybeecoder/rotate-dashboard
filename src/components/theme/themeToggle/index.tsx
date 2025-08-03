import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import { css } from '../../../../styled-system/css';
import { useTheme } from '@/contexts/themeContext';
import { MotionBox } from '@/utils';


export const ThemeToggle = ({
  size = 'sm',
  variant = 'ghost',
  showLabel = false
}: {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'outline' | 'solid'
  showLabel?: boolean
}) => {
  const { theme, actualTheme, toggleTheme } = useTheme()

  if (!actualTheme) return null

  const isDark = actualTheme === 'dark'

  return (
    <MotionBox
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={css({
        position: 'relative',
        width: '40px',
        height: '24px',
        bg: isDark ? 'blue.600' : 'yellow.300',
        borderRadius: '12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.3s ease',
        border: '2px solid',
        borderColor: isDark ? 'blue.400' : 'yellow.400',
      })}
      onClick={toggleTheme}
    >
      <MotionBox
        animate={{
          x: isDark ? 18 : 2,
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        className={css({
          width: '16px',
          height: '16px',
          bg: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        })}
      >
        {isDark ? '🌙' : '☀️'}
      </MotionBox>
    </MotionBox>
  )
}