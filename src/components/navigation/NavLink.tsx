import React from 'react';
import type { Translation } from '../../types';

interface NavLinkProps {
  href: string;
  translationKey: string;
  translations: Record<string, Record<keyof Translation, string>>;
  language: keyof Translation;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  translationKey,
  translations,
  language,
}) => {
  return (
    <a
      href={href}
      className="text-white/80 hover:text-gold transition-colors"
    >
      {translations[translationKey][language]}
    </a>
  );
};

export default NavLink;