'use client';

import { Box, Text } from '@chakra-ui/react';
import { css } from "../../../../styled-system/css";
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/themeContext';

interface LoaderProps {
  isVisible?: boolean;
  loadingText?: string;
}

const Loader = ({ isVisible = true, loadingText = "Loading..." }: LoaderProps) => {
  const [dots, setDots] = useState('');
  const { actualTheme } = useTheme();
  
  // Animated dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  // Handle theme loading state
  if (!actualTheme) {
    return null; // or a simple fallback loader
  }

  // Theme-based color values
  const isDark = actualTheme === 'dark';
  const bgColor = isDark ? 'rgba(26, 32, 44, 0.95)' : 'rgba(255, 255, 255, 0.95)';
  const primaryColor = isDark ? '#4AE54A' : '#02983E';
  const textColor = isDark ? '#E2E8F0' : '#334155';
  const accentColor = isDark ? '#9F7AEA' : '#6236CC';

  if (!isVisible) return null;

  return (
    <Box
      className={css({
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '9999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      })}
      style={{ backgroundColor: bgColor }}
    >
      {/* Background animated particles */}
      <Box
        className={css({
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        })}
      >
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            className={css({
              position: 'absolute',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              transition: 'all 0.5s ease-in-out',
              animation: `float-${i} ${3 + i * 0.5}s ease-in-out infinite`,
            })}
            style={{
              backgroundColor: i % 2 === 0 ? primaryColor : accentColor,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              opacity: 0.6,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </Box>

      {/* Main loader container */}
      <Box
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: '10',
        })}
      >
        {/* Outer pulsing rings */}
        <Box
          className={css({
            position: 'relative',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          {/* Pulse rings */}
          {[...Array(3)].map((_, i) => (
            <Box
              key={i}
              className={css({
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid',
                opacity: '0.7',
                transition: 'all 0.8s ease-in-out',
                animation: `pulse-ring ${2}s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite`,
              })}
              style={{ 
                borderColor: primaryColor,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          {/* Central rotating element */}
          <Box
            className={css({
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '3px solid transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'spin 1s linear infinite',
            })}
            style={{
              borderTopColor: primaryColor,
              borderRightColor: accentColor,
            }}
          >
            {/* Inner bouncing dot */}
            <Box
              className={css({
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                animation: 'bounce-dot 2s infinite',
              })}
              style={{ backgroundColor: primaryColor }}
            />
          </Box>
        </Box>

        {/* Loading text with shimmer effect */}
        <Box
          className={css({
            marginTop: '32px',
            textAlign: 'center',
          })}
        >
          <Text
            className={css({
              fontSize: '18px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              animation: 'text-shimmer 2s ease-in-out infinite',
            })}
            style={{ color: textColor }}
          >
            {loadingText}
          </Text>
          
          {/* Animated dots */}
          <Text
            className={css({
              fontSize: '18px',
              fontWeight: '600',
              marginTop: '4px',
              minHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            })}
            style={{ color: primaryColor }}
          >
            {dots}
          </Text>
        </Box>

        {/* Progress indicator dots */}
        <Box
          className={css({
            display: 'flex',
            gap: '8px',
            marginTop: '24px',
          })}
        >
          {[...Array(4)].map((_, i) => (
            <Box
              key={i}
              className={css({
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                animation: `bounce-progress 1.4s ease-in-out infinite both`,
              })}
              style={{
                backgroundColor: i % 2 === 0 ? primaryColor : accentColor,
                animationDelay: `${i * 0.16}s`,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        @keyframes bounce-dot {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0, -30px, 0); }
          70% { transform: translate3d(0, -15px, 0); }
          90% { transform: translate3d(0, -4px, 0); }
        }
        
        @keyframes bounce-progress {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        
        @keyframes text-shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-22px); }
        }
      `}</style>
    </Box>
  );
};

export default Loader;