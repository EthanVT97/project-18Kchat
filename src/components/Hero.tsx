import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { MyanmarPattern } from './patterns/MyanmarPattern';
import { Container } from './ui/Container';

export const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <MyanmarPattern className="absolute top-0 right-0 w-1/3 opacity-10" />
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">
            {translations.hero[language]}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            {translations.subHero[language]}
          </p>
          <button className="bg-gold text-dark px-8 py-3 rounded-md text-lg font-semibold hover:bg-gold/90 transition-colors">
            {translations.getStarted[language]}
          </button>
        </div>
      </Container>
    </section>
  );
};