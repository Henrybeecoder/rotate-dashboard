import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '../../../../styled-system/css';

interface HoverTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  offset?: number;
  delay?: number;
  width?: string;
  height?: string;
  disabled?: boolean;
  className?: string;
  contentClassName?: string;
  manualPosition?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  showArrow?: boolean;
}

export const HoverTooltip: React.FC<HoverTooltipProps> = ({
  children,
  content,
  position = 'top',
  offset = 4,
  delay = 200,
  width = 'auto',
  height = 'auto',
  disabled = false,
  className,
  contentClassName,
  manualPosition,
  showArrow = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    if (manualPosition) {
      // For manual positioning, use absolute positioning relative to the parent
      setTooltipStyle({
        position: 'absolute',
        ...manualPosition,
        zIndex: 9999,
      });
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    let top = 0;
    let left = 0;

    switch (position) {
      case 'top':
        top = triggerRect.top + scrollY - tooltipRect.height - offset;
        left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + scrollY + offset;
        left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left + scrollX - tooltipRect.width - offset;
        break;
      case 'right':
        top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + scrollX + offset;
        break;
    }

    // Ensure tooltip stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < 0) left = 8;
    if (left + tooltipRect.width > viewportWidth) left = viewportWidth - tooltipRect.width - 8;
    if (top < scrollY) top = scrollY + 8;
    if (top + tooltipRect.height > scrollY + viewportHeight) top = scrollY + viewportHeight - tooltipRect.height - 8;

    setTooltipStyle({
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
      zIndex: 9999,
    });
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      if (!manualPosition) {
        window.addEventListener('scroll', calculatePosition);
        window.addEventListener('resize', calculatePosition);
      }
    }

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [isVisible, position, offset, manualPosition]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const tooltipClasses = css({
    backgroundColor: '#FAFAFA',
    borderRadius: '20px',
    padding: '12px',
    width: width,
    height: height,
    boxShadow: '0px 2px 15pt 2px 15pt #00000029',
    fontSize: 'sm',
    color: 'secondary.800',
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden',
    transform: isVisible ? 'translateY(0)' : 'translateY(-4px)',
    transition: 'all 0.2s ease-in-out',
    pointerEvents: 'none',
    wordWrap: 'break-word',
    lineHeight: '1.5',
  });

  const arrowClasses = css({
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: '#FAFAFA',
    transform: 'rotate(45deg)',
    ...(position === 'top' && {
      bottom: '-4px',
      left: '50%',
      marginLeft: '-4px',
    }),
    ...(position === 'bottom' && {
      top: '-4px',
      left: '50%',
      marginLeft: '-4px',
    }),
    ...(position === 'left' && {
      right: '-4px',
      top: '50%',
      marginTop: '-4px',
    }),
    ...(position === 'right' && {
      left: '-4px',
      top: '50%',
      marginTop: '-4px',
    }),
  });

  return (
    <Box position="relative" display="inline-block">
      <Box
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        display="inline-block"
        className={className}
      >
        {children}
      </Box>

      {isVisible && (
        <div
          ref={tooltipRef}
          className={`${tooltipClasses} ${contentClassName || ''}`}
          style={tooltipStyle}
        >
          {showArrow && !manualPosition && <div className={arrowClasses} />}
          <div>
            {content}
          </div>
        </div>
      )}
    </Box>
  );
};