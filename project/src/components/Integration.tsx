import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { integrations } from '../data/integrations';
import { Container } from './ui/Container';

export const Integration = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-dark/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">
            {integrations.title[language]}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {integrations.description[language]}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {integrations.platforms.map((platform) => (
            <div
              key={platform.id}
              className="flex flex-col items-center p-6 bg-dark/40 rounded-lg"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-12 w-auto mb-4 opacity-70 hover:opacity-100 transition-opacity"
              />
              <span className="text-white/60">{platform.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};