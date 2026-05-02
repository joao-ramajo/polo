import type { TattooImage, TattooLayoutHint } from "../types/portfolio";

export function sortByOrder(images: TattooImage[]): TattooImage[] {
  return [...images].sort((a, b) => a.order - b.order);
}

export function getFeaturedImages(images: TattooImage[]): TattooImage[] {
  return sortByOrder(images).filter((image) => image.featured);
}

export function getGalleryImages(images: TattooImage[]): TattooImage[] {
  return sortByOrder(images);
}

export function getGalleryTileShape(ratio: number): TattooLayoutHint {
  if (ratio >= 1.55) {
    return "wide";
  }

  if (ratio >= 1.15) {
    return "landscape";
  }

  if (ratio >= 0.92) {
    return "square";
  }

  if (ratio >= 0.72) {
    return "portrait";
  }

  return "tall";
}

export function getGalleryTileClasses(shape: TattooLayoutHint): string {
  switch (shape) {
    case "wide":
      return "aspect-[16/10] lg:col-span-7 lg:row-span-3 lg:h-full lg:aspect-auto";
    case "landscape":
      return "aspect-[4/3] lg:col-span-6 lg:row-span-3 lg:h-full lg:aspect-auto";
    case "square":
      return "aspect-square lg:col-span-4 lg:row-span-4 lg:h-full lg:aspect-auto";
    case "tall":
      return "aspect-[3/5] lg:col-span-3 lg:row-span-5 lg:h-full lg:aspect-auto";
    default:
      return "aspect-[4/5] lg:col-span-4 lg:row-span-5 lg:h-full lg:aspect-auto";
  }
}
