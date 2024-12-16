import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div
    className={`p-6 rounded-lg bg-dark/40 backdrop-blur-sm border border-gold/10 hover:border-gold/20 transition-colors ${className}`}
  >
    {children}
  </div>
);