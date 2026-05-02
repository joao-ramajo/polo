import { useState } from "react";
import type { TattooImage, TattooLayoutHint } from "../types/portfolio";
import {
  getGalleryTileClasses,
  getGalleryTileShape,
} from "../utils/gallery";

type GalleryGridProps = {
  images: TattooImage[];
};

type GalleryTileProps = {
  image: TattooImage;
};

function GalleryTile({ image }: GalleryTileProps) {
  const [shape, setShape] = useState<TattooLayoutHint>(
    image.layoutHint ?? "portrait",
  );

  return (
    <figure
      key={image.id}
      className={`gallery-tile group relative overflow-hidden ${getGalleryTileClasses(shape)}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
        loading="lazy"
        onLoad={(event) => {
          if (image.layoutHint) {
            return;
          }

          const { naturalWidth, naturalHeight } = event.currentTarget;

          if (!naturalWidth || !naturalHeight) {
            return;
          }

          setShape(getGalleryTileShape(naturalWidth / naturalHeight));
        }}
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-background via-background/20 to-transparent px-4 pb-4 pt-10">
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-text/76">
          {image.category}
        </p>
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-accent">
          {String(image.order).padStart(2, "0")}
        </p>
      </figcaption>
    </figure>
  );
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-xl lg:mb-12">
          <p className="text-[0.68rem] uppercase tracking-[0.4em] text-accent">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none text-text sm:text-5xl">
            Curadoria em grid livre.
          </h2>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-8">
        <div className="gallery-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {images.map((image) => (
            <GalleryTile key={image.id} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
