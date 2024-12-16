import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { features } from '../data/features';
import { Zap, BarChart2, Network } from 'lucide-react';

const ICON_MAP = {
  Zap,
  BarChart: BarChart2,
  Connection: Network,
} as const;

export const Features = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-dark/50" id="features">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP];
            return (
              <div
                key={feature.id}
                className="p-6 rounded-lg bg-dark/40 backdrop-blur-sm border border-gold/10 hover:border-gold/20 transition-colors"
              >
                <div className="w-12 h-12 mb-4 text-gold">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">
                  {feature.title[language]}
                </h3>
                <p className="text-white/70">
                  {feature.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};