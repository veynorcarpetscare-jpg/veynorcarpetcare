export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  bullets: string[];
};

export type ServiceArea = {
  name: string;
  region: string;
  description: string;
  slug?: string;
};

export type Review = {
  id: string;
  name: string;
  area: string;
  rating: 5;
  service: string;
  dateLabel: string;
  text: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryProject = {
  id: string;
  title: string;
  city: string;
  result: string;
  description: string;
  beforeImages: GalleryImage[];
  afterImages: GalleryImage[];
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type CityPageContent = {
  slug: string;
  city: string;
  heroTitle: string;
  heroDescription: string;
  metaDescription: string;
  localAngle: string;
  carpetFocus: string;
  upholsteryFocus: string;
  petFocus: string;
  commonJobs: string[];
  faqs: FAQItem[];
  relatedSlugs: string[];
};
