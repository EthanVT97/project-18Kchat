export type Language = 'my' | 'th' | 'en';

export interface Translation {
  [key: string]: {
    [key in Language]: string;
  };
}

export interface PricingTier {
  id: string;
  name: Translation;
  price: {
    [key in Language]: {
      amount: number;
      currency: string;
    };
  };
  features: Translation[];
}

export interface Testimonial {
  id: string;
  name: Translation;
  company: Translation;
  content: Translation;
  image: string;
}