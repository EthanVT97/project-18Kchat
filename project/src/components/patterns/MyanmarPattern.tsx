import React from 'react';

interface MyanmarPatternProps {
  className?: string;
}

export const MyanmarPattern: React.FC<MyanmarPatternProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M40,50 Q50,0 60,50 T80,50 T100,50 T120,50 T140,50 T160,50"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
    />
    {/* Simplified Myanmar pattern - can be enhanced with more detailed SVG paths */}
  </svg>
);