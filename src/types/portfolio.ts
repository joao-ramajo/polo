export type Artist = {
  name: string;
  headline: string;
  location: string;
  bio: string;
  instagramUrl: string;
  whatsappUrl: string;
};

export type TattooImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  featured: boolean;
  order: number;
};
