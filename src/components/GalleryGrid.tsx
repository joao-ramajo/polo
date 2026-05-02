import type { TattooImage } from "../types/portfolio";

type GalleryGridProps = {
  images: TattooImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-site">
        <div className="mb-8 max-w-xl lg:mb-12">
          <p className="text-[0.68rem] uppercase tracking-[0.4em] text-accent">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none text-text sm:text-5xl">
            Curadoria em grid livre.
          </h2>
        </div>

        <div className="gallery-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[120px] lg:gap-5">
          {images.map((image) => (
            <figure
              key={image.id}
              className="gallery-tile group relative overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[22rem] w-full object-cover transition duration-700 group-hover:scale-[1.05] md:h-[26rem] lg:h-full"
                loading="lazy"
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
          ))}
        </div>
      </div>
    </section>
  );
}
