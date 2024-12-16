import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { pricing } from '../data/pricing';
import { Check } from 'lucide-react';
import { Container } from './ui/Container';

export const Pricing = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-dark/90 to-dark" id="pricing">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-8 rounded-lg border ${
                tier.popular
                  ? 'border-gold bg-gold/5'
                  : 'border-white/10 bg-dark/40'
              }`}
            >
              {tier.popular && (
                <span className="inline-block px-3 py-1 text-xs text-gold border border-gold rounded-full mb-4">
                  {pricing.popularLabel[language]}
                </span>
              )}
              <h3 className="text-xl font-semibold text-gold mb-2">
                {tier.name[language]}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">
                  {tier.price[language].currency}
                  {tier.price[language].amount.toLocaleString()}
                </span>
                <span className="text-white/60">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-white/80">
                    <Check className="w-5 h-5 text-gold mr-2" />
                    {feature[language]}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-md transition-colors ${
                  tier.popular
                    ? 'bg-gold text-dark hover:bg-gold/90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {pricing.selectPlan[language]}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};