import React from 'react';
import { Language } from '../../types';

interface NavLinkProps {
  href: string;
  translationKey: string;
  translations: Record<string, Record<Language, string>>;
  language: Language;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  translationKey,
  translations,
  language,
}) => (
  <a
    href={href}
    className="text-white/80 hover:text-gold transition-colors"
  >
    {translations[translationKey][language]}
  </a>
);