import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { copyright } from '../../data/footer';

export const Copyright = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pt-8 border-t border-gold/10 text-center">
      <p className="text-sm text-white/60">
        {copyright[language]}
      </p>
    </div>
  );
};