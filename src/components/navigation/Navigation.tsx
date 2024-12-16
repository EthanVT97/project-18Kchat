import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from './NavLink';
import LanguageSwitcher from '../LanguageSwitcher';
import { translations } from '../../data/translations';
import type { Translation } from '../../types';

export const Navigation: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as keyof Translation;

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink
        href="#features"
        translationKey="features"
        translations={translations}
        language={currentLang}
      />
      <NavLink
        href="#pricing"
        translationKey="pricing"
        translations={translations}
        language={currentLang}
      />
      <NavLink
        href="#contact"
        translationKey="contact"
        translations={translations}
        language={currentLang}
      />
      <LanguageSwitcher />
    </nav>
  );
};

export default Navigation;