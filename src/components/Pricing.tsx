import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Translation } from '../types';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const Pricing: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as keyof Translation;

  const tiers: PricingTier[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$10',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$20',
      features: ['All Basic features', 'Feature 4', 'Feature 5'],
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$30',
      features: ['All Pro features', 'Feature 6', 'Feature 7'],
    },
  ];

  return (
    <section className="pricing">
      <div className="grid">
        {tiers.map((tier) => (
          <div key={tier.id} className={`tier ${tier.popular ? 'popular' : ''}`}>
            <h3>{tier.name}</h3>
            <p className="price">{tier.price}</p>
            <ul>
              {tier.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;