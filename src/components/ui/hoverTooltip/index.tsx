import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import {css} from '../../../../styled-system/css';


interface HoverTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  offset?: number;
  delay?: number;
  maxWidth?: string;
  disabled?: boolean;
  className?: string;
}

export const HoverTooltip: React.FC<HoverTooltipProps> = ({
  children,
  content,
  position = 'top',
  offset = 8,
  delay = 200,
  maxWidth = '300px',
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
  const timeoutRef = useRef<NodeJS.Timeout>();

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

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
      window.addEventListener('scroll', calculatePosition);
      window.addEventListener('resize', calculatePosition);
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
    borderRadius: 'md',
    padding: '12px',
    maxWidth: maxWidth,
    boxShadow: '0px 2px 2px 2px #00000029',
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
    <>
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
    </>
  );
};


export const HoverTooltipExample: React.FC = () => {
  return (
    <div className={css({ padding: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' })}>
      <HoverTooltip
        content={
          <div>
            <h4 className={css({ fontWeight: 'semibold', marginBottom: '8px' })}>
              Product Information
            </h4>
            <p className={css({ fontSize: 'sm', color: 'secondary.500' })}>
              This is a detailed description that appears when you hover over the image.
              It can contain multiple lines of text and rich content.
            </p>
          </div>
        }
        position="top"
      >
        <img
          src="https://via.placeholder.com/150x150/02983E/white?text=Hover+Me"
          alt="Hover example"
          className={css({
            borderRadius: 'md',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            _hover: { transform: 'scale(1.05)' }
          })}
        />
      </HoverTooltip>

      <HoverTooltip
        content="Simple tooltip content"
        position="bottom"
      >
        <div className={css({
          width: '120px',
          height: '80px',
          backgroundColor: 'primary.50',
          border: '2px solid',
          borderColor: 'primary.100',
          borderRadius: 'lg',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: 'sm',
          fontWeight: 'medium',
          color: 'primary.100'
        })}>
          Hover Card
        </div>
      </HoverTooltip>

      <HoverTooltip
        content={
          <div>
            <div className={css({ display: 'flex', alignItems: 'center', marginBottom: '8px' })}>
              <div className={css({
                width: '12px',
                height: '12px',
                backgroundColor: 'success.100',
                borderRadius: 'full',
                marginRight: '8px'
              })} />
              <span className={css({ fontWeight: 'semibold', fontSize: 'sm' })}>Active Status</span>
            </div>
            <p className={css({ fontSize: 'xs', color: 'secondary.500' })}>
              Last seen: 2 minutes ago
            </p>
          </div>
        }
        position="right"
        delay={100}
      >
        <div className={css({
          width: '40px',
          height: '40px',
          backgroundColor: 'blue.100',
          borderRadius: 'full',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer'
        })}>
          JD
        </div>
      </HoverTooltip>
    </div>
  );
};