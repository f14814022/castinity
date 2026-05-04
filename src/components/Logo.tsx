import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  showText = true, 
  width = 240, 
  height = 60 
}) => {
  if (!showText) {
    // Icon only version
    const iconSize = Math.min(width, height);
    return (
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 50 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#6366F1", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#9333EA", stopOpacity:1}} />
          </linearGradient>
        </defs>
        
        {/* Outer circle */}
        <circle cx="25" cy="25" r="24" fill="url(#logoGradient)" opacity="0.1"/>
        <circle cx="25" cy="25" r="24" stroke="url(#logoGradient)" strokeWidth="2" fill="none"/>
        
        {/* WiFi/Signal waves */}
        <path 
          d="M 25 35 Q 20 28, 15 25 Q 20 22, 25 15 Q 30 22, 35 25 Q 30 28, 25 35 Z" 
          fill="url(#logoGradient)" 
          opacity="0.3"
        />
        
        {/* Center connectivity node */}
        <circle cx="25" cy="25" r="4" fill="url(#logoGradient)"/>
        
        {/* Connection lines */}
        <line x1="25" y1="25" x2="15" y2="15" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6"/>
        <line x1="25" y1="25" x2="35" y2="15" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6"/>
        <line x1="25" y1="25" x2="15" y2="35" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6"/>
        <line x1="25" y1="25" x2="35" y2="35" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6"/>
        
        {/* Corner nodes */}
        <circle cx="15" cy="15" r="3" fill="#6366F1"/>
        <circle cx="35" cy="15" r="3" fill="#9333EA"/>
        <circle cx="15" cy="35" r="3" fill="#7C3AED"/>
        <circle cx="35" cy="35" r="3" fill="#A855F7"/>
      </svg>
    );
  }

  // Full logo with text
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradientFull" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#6366F1", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#9333EA", stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#1F2937", stopOpacity:1}} />
          <stop offset="50%" style={{stopColor:"#6366F1", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#9333EA", stopOpacity:1}} />
        </linearGradient>
      </defs>
      
      {/* Logo Icon */}
      <g transform="translate(5, 5)">
        {/* Outer circle */}
        <circle cx="25" cy="25" r="24" fill="url(#logoGradientFull)" opacity="0.1"/>
        <circle cx="25" cy="25" r="24" stroke="url(#logoGradientFull)" strokeWidth="2" fill="none"/>
        
        {/* WiFi/Signal waves */}
        <path 
          d="M 25 35 Q 20 28, 15 25 Q 20 22, 25 15 Q 30 22, 35 25 Q 30 28, 25 35 Z" 
          fill="url(#logoGradientFull)" 
          opacity="0.3"
        />
        
        {/* Center connectivity node */}
        <circle cx="25" cy="25" r="4" fill="url(#logoGradientFull)"/>
        
        {/* Connection lines */}
        <line x1="25" y1="25" x2="15" y2="15" stroke="url(#logoGradientFull)" strokeWidth="2" opacity="0.6"/>
        <line x1="25" y1="25" x2="35" y2="15" stroke="url(#logoGradientFull)" strokeWidth="2" opacity="0.6"/>
        <line x1="25" y1="25" x2="15" y2="35" stroke="url(#logoGradientFull)" strokeWidth="2" opacity="0.6"/>
        <line x1="25" y1="25" x2="35" y2="35" stroke="url(#logoGradientFull)" strokeWidth="2" opacity="0.6"/>
        
        {/* Corner nodes */}
        <circle cx="15" cy="15" r="3" fill="#6366F1"/>
        <circle cx="35" cy="15" r="3" fill="#9333EA"/>
        <circle cx="15" cy="35" r="3" fill="#7C3AED"/>
        <circle cx="35" cy="35" r="3" fill="#A855F7"/>
      </g>
      
      {/* Brand Text */}
      <text 
        x="60" 
        y="38" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="24" 
        fontWeight="800" 
        fill="#1F2937"
      >
        Heliora<tspan fill="url(#logoGradientFull)">beam</tspan>
      </text>
    </svg>
  );
};

export default Logo;
