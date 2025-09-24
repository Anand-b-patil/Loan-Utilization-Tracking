import React from 'react';

interface MobilePhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const MobilePhoneFrame: React.FC<MobilePhoneFrameProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`mobile-phone-container ${className}`}>
      <div className="mobile-phone-frame">
        {/* Phone bezel and frame */}
        <div className="phone-bezel">
          {/* Top speaker grille */}
          <div className="speaker-grille"></div>
          
          {/* Front camera */}
          <div className="front-camera"></div>
          
          {/* Screen area */}
          <div className="phone-screen">
            <div className="screen-content">
              {children}
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="home-indicator"></div>
        </div>
        
        {/* Phone body/shadow */}
        <div className="phone-body"></div>
        
        {/* Additional phone details */}
        <div className="phone-details">
          <div className="volume-button volume-up"></div>
          <div className="volume-button volume-down"></div>
          <div className="power-button"></div>
        </div>
      </div>
    </div>
  );
};

// Add the CSS styles
const styles = `
.mobile-phone-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
  overflow: hidden;
}

.mobile-phone-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
  z-index: 0;
}

.mobile-phone-frame {
  position: relative;
  width: 375px;
  height: 812px;
  background: #1a1a1a;
  border-radius: 40px;
  padding: 8px;
  box-shadow: 
    0 0 0 2px #333,
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset,
    0 0 20px rgba(0, 0, 0, 0.2);
  transform: none;
  transition: none;
  z-index: 1;
}

/* hover tilt removed */

.phone-bezel {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 
    0 0 0 1px #444 inset,
    0 0 0 2px #222 inset;
}

.speaker-grille {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 6px;
  background: linear-gradient(90deg, #333 0%, #555 50%, #333 100%);
  border-radius: 3px;
  z-index: 10;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.front-camera {
  position: absolute;
  top: 15px;
  right: 30px;
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, #333 0%, #111 100%);
  border-radius: 50%;
  z-index: 10;
  box-shadow: 
    0 0 0 1px #555,
    0 1px 2px rgba(0, 0, 0, 0.5);
}

.phone-screen {
  flex: 1;
  background: #000;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 0 0 1px #333 inset,
    0 0 0 2px #111 inset;
}

.screen-content {
  width: 100%;
  height: 100%;
  background: var(--background, #fafafa);
  overflow: hidden;
  border-radius: 28px;
  position: relative;
}

.home-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  z-index: 10;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.phone-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  border-radius: 40px;
  z-index: -1;
  box-shadow: 
    0 0 0 1px #444,
    0 0 0 2px #333,
    0 25px 50px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

/* Side buttons */
.phone-body::before {
  content: '';
  position: absolute;
  left: -2px;
  top: 80px;
  width: 4px;
  height: 60px;
  background: linear-gradient(180deg, #333 0%, #222 50%, #333 100%);
  border-radius: 2px;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.5);
}

.phone-body::after {
  content: '';
  position: absolute;
  left: -2px;
  top: 160px;
  width: 4px;
  height: 40px;
  background: linear-gradient(180deg, #333 0%, #222 50%, #333 100%);
  border-radius: 2px;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.5);
}

/* Additional phone details */
.phone-details {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
}

.volume-button {
  position: absolute;
  left: -6px;
  width: 8px;
  height: 30px;
  background: linear-gradient(180deg, #444 0%, #222 50%, #444 100%);
  border-radius: 4px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.3);
}

.volume-up {
  top: 100px;
}

.volume-down {
  top: 140px;
  height: 25px;
}

.power-button {
  position: absolute;
  right: -6px;
  top: 120px;
  width: 8px;
  height: 50px;
  background: linear-gradient(180deg, #444 0%, #222 50%, #444 100%);
  border-radius: 4px;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .mobile-phone-frame {
    transform: none;
  }
  
  /* hover transform removed */
}

@media (max-width: 768px) {
  .mobile-phone-container {
    padding: 1rem;
  }
  
  .mobile-phone-frame {
    width: 320px;
    height: 693px;
    transform: none;
  }
  
  .mobile-phone-frame:hover {
    transform: none;
  }
}

@media (max-width: 480px) {
  .mobile-phone-container {
    padding: 0.5rem;
  }
  
  .mobile-phone-frame {
    width: 280px;
    height: 607px;
  }
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .mobile-phone-container {
    background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  }
}

/* Loading glow animation removed */

/* Screen content adjustments for mobile frame */
.screen-content .min-h-screen {
  min-height: 100% !important;
  height: 100% !important;
}

/* Ensure proper scrolling within the phone frame */
.screen-content {
  overflow-y: auto;
  overflow-x: hidden;
}

/* Custom scrollbar for the phone screen */
.screen-content::-webkit-scrollbar {
  width: 4px;
}

.screen-content::-webkit-scrollbar-track {
  background: transparent;
}

.screen-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.screen-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}
`;

// Inject styles into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default MobilePhoneFrame;
