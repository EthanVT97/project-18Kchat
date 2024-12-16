import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { footerLinks } from '../../data/footer';

export const FooterNav = () => {
  const { language } = useLanguage();

  return (
    <div className="col-span-2">
      <nav className="grid grid-cols-2 gap-8">
        {footerLinks.map((section) => (
          <div key={section.id}>
            <h4 className="text-gold font-semibold mb-4">
              {section.title[language]}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};