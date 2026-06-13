// ─── Global Types ─────────────────────────────────────────────────────────────

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

export interface CollectionItem {
  id: number;
  image: string;
  label: string;
  href?: string;
}

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  isRecommended: boolean;
  category?: string;
  description?: string
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
