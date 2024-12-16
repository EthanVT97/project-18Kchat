import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { socialLinks } from '../../data/footer';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const ICON_MAP = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
} as const;

export const FooterSocial = () => {
  const { language } = useLanguage();

  return (
    <div className="col-span-2">
      <h4 className="text-gold font-semibold mb-4">
        {socialLinks.title[language]}
      </h4>
      <div className="flex space-x-4">
        {socialLinks.links.map((link) => {
          const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP];
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors"
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>
    </div>
  );
};