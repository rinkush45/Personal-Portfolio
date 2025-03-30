import { useEffect } from 'react';

export function useTooltipPosition() {
  useEffect(() => {
    function positionTooltips() {
      const groups = document.querySelectorAll('.group');
      
      groups.forEach(group => {
        const tooltip = group.querySelector('div[class*="fixed opacity-0 group-hover:opacity-100"]');
        if (!tooltip) return;
        
        group.addEventListener('mouseenter', () => {
          const groupRect = group.getBoundingClientRect();
          const tooltipRect = tooltip.getBoundingClientRect();
          
          // Calculate center position
          const centerX = groupRect.left + (groupRect.width / 2);
          
          // Position tooltip centered above the icon
          tooltip.setAttribute('style', `left: ${centerX}px; bottom: ${window.innerHeight - groupRect.top + 10}px;`);
          
          // Check if tooltip goes beyond the left edge of the screen
          if (centerX - (tooltipRect.width / 2) < 20) {
            tooltip.setAttribute('style', 'left: 20px; transform: translateY(-100%);');
            
            // Adjust arrow
            const arrow = tooltip.querySelector('.tooltip-arrow') as HTMLElement;
            if (arrow) {
              arrow.style.left = `${centerX - 20}px`;
            }
          }
          
          // Check if tooltip goes beyond the right edge of the screen
          else if (centerX + (tooltipRect.width / 2) > window.innerWidth - 20) {
            tooltip.setAttribute('style', `left: ${window.innerWidth - tooltipRect.width - 20}px; transform: translateY(-100%);`);
            
            // Adjust arrow
            const arrow = tooltip.querySelector('.tooltip-arrow') as HTMLElement;
            if (arrow) {
              arrow.style.left = `${centerX - (window.innerWidth - tooltipRect.width - 20)}px`;
            }
          }
          else {
            tooltip.setAttribute('style', 'transform: translate(-50%, -100%);');
            
            // Reset arrow
            const arrow = tooltip.querySelector('.tooltip-arrow') as HTMLElement;
            if (arrow) {
              arrow.style.left = '50%';
            }
          }
        });
      });
    }

    // Run when component mounts and whenever window is resized
    window.addEventListener('resize', positionTooltips);
    positionTooltips();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', positionTooltips);
    };
  }, []);
} 