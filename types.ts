export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  title: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
