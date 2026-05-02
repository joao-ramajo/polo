import type { TattooImage } from "../types/portfolio";

export function sortByOrder(images: TattooImage[]): TattooImage[] {
  return [...images].sort((a, b) => a.order - b.order);
}

export function getFeaturedImages(images: TattooImage[]): TattooImage[] {
  return sortByOrder(images).filter((image) => image.featured);
}

export function getGalleryImages(images: TattooImage[]): TattooImage[] {
  return sortByOrder(images);
}
