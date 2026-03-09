export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface GalleryItem extends ImageAsset {
  id?: string;
  category: string;
  caption?: string;
  location?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  context?: string;
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
  startingPrice: string;
  typicalDuration: string;
}

export interface PricingTier {
  name: string;
  price: number;
  unit: string;
  highlight?: boolean;
  bestFor?: string;
  includes: string[];
  addOns?: string[];
}

export interface WeddingPackage {
  name: string;
  price: number;
  coverage: string;
  includes: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ContactField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required: boolean;
  placeholder?: string;
  options?: string[];
}
