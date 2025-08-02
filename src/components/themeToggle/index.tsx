'use client'

import { Button } from '@chakra-ui/react'
import { useTheme } from '@/contexts/themeContext'

const ThemeToggleButton = ({
  size = 'md',
  variant = 'ghost',
  showLabel = false
}: {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'outline' | 'solid'
  showLabel?: boolean
}) => {
  const { theme, actualTheme, toggleTheme } = useTheme()

  if (!actualTheme) return null

  const icon = theme === 'system' ? '🖥️' : actualTheme === 'dark' ? '🌙' : '☀️'
  const label = theme === 'system' ? 'System' : actualTheme === 'dark' ? 'Dark' : 'Light'

  return (
    <Button
      aria-label={`Toggle theme mode. Current mode: ${theme}`}
      onClick={toggleTheme}
      variant={variant}
      size={size}
  
      _hover={{
        bg: actualTheme === 'dark' ? 'gray.700' : 'gray.100'
      }}
    >
      {showLabel && label} Toggle Theme
    </Button>
  )
}

export default ThemeToggleButton