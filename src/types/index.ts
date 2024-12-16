export interface Translation {
  my: string;
  en: string;
  th: string;
}

export interface PricingTier {
  id: string;
  name: Translation;
  price: {
    my: { amount: number; currency: string };
    en: { amount: number; currency: string };
    th: { amount: number; currency: string };
  };
  features: Translation[];
  popular?: boolean;
}

export interface Feature {
  id: string;
  title: Translation;
  description: Translation;
  icon: string;
}