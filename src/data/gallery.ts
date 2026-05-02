import type { TattooImage } from "../types/portfolio";

export const gallery: TattooImage[] = [
  {
    id: "tattoo-001",
    src: "https://placehold.co/1200x1600/2A2A2A/C9A227?text=Tattoo+001",
    alt: "Tattoo blackwork no braco",
    category: "Blackwork",
    featured: true,
    order: 1,
  },
  {
    id: "tattoo-002",
    src: "https://placehold.co/1200x1600/353535/F5F5F5?text=Tattoo+002",
    alt: "Tattoo ornamental na perna",
    category: "Ornamental",
    featured: true,
    order: 2,
  },
  {
    id: "tattoo-003",
    src: "https://placehold.co/1200x1500/303030/C9A227?text=Tattoo+003",
    alt: "Tattoo fine line no antebraco",
    category: "Fine Line",
    featured: false,
    order: 3,
  },
  {
    id: "tattoo-004",
    src: "https://placehold.co/1200x1800/3A3A3A/F5F5F5?text=Tattoo+004",
    alt: "Tattoo autoral em composicao vertical",
    category: "Autoral",
    featured: false,
    order: 4,
  },
  {
    id: "tattoo-005",
    src: "https://placehold.co/1200x1600/2F2F2F/C9A227?text=Tattoo+005",
    alt: "Tattoo com contraste marcado em preto",
    category: "Blackwork",
    featured: false,
    order: 5,
  },
  {
    id: "tattoo-006",
    src: "https://placehold.co/1200x1450/383838/F5F5F5?text=Tattoo+006",
    alt: "Tattoo minimalista em close",
    category: "Minimal",
    featured: false,
    order: 6,
  },
];
