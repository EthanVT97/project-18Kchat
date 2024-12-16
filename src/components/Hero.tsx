import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from '../data/translations';
import { MyanmarPattern } from './patterns/MyanmarPattern';
import type { Translation } from '../types';

export const Hero: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as keyof Translation;

  return (
    <section className="hero">
      <MyanmarPattern />
      <div className="content">
        <h1>{translations.heroTitle[currentLang]}</h1>
        <p>{translations.heroDescription[currentLang]}</p>
      </div>
    </section>
  );
};

export default Hero;