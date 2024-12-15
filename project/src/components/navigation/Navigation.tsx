import React from 'react';
import { NavLink } from './NavLink';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';

export const Navigation = () => {
  const { language } = useLanguage();

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink
        href="#features"
        translationKey="features"
        translations={translations}
        language={language}
      />
      <NavLink
        href="#pricing"
        translationKey="pricing"
        translations={translations}
        language={language}
      />
      <NavLink
        href="#contact"
        translationKey="contact"
        translations={translations}
        language={language}
      />
      <LanguageSwitcher />
      <button className="bg-gold text-dark px-6 py-2 rounded-md hover:bg-gold/90 transition-colors">
        {translations.getStarted[language]}
      </button>
    </nav>
  );
};