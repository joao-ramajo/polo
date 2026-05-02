import type { TattooImage } from "../types/portfolio";

type FeaturedGalleryProps = {
  images: TattooImage[];
};

export function FeaturedGallery({ images }: FeaturedGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const lead = images[0];
  const supporting = images.slice(1, 3);
  const hasSingleImage = images.length === 1;
  const hasTwoImages = images.length === 2;

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-site">
        <div className="mb-8 flex items-end justify-between gap-4 lg:mb-12">
          <div className="max-w-xl">
            <p className="text-[0.68rem] uppercase tracking-[0.4em] text-accent">
              Destaques
            </p>
            <h2 className="mt-3 font-display text-4xl leading-none text-text sm:text-5xl">
              Imagem primeiro.
            </h2>
          </div>
        </div>

        <div
          className={`grid gap-5 lg:gap-8 ${
            hasSingleImage
              ? ""
              : hasTwoImages
                ? "lg:grid-cols-2"
                : "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
          }`}
        >
          <article className="group relative overflow-hidden">
            <img
              src={lead.src}
              alt={lead.alt}
              className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${
                hasSingleImage
                  ? "h-[30rem] sm:h-[38rem] lg:h-[46rem]"
                  : hasTwoImages
                    ? "h-[26rem] sm:h-[34rem] lg:h-[42rem]"
                    : "h-[28rem] sm:h-[36rem] lg:h-[48rem]"
              }`}
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-background via-background/20 to-transparent px-4 pb-4 pt-12 sm:px-6 sm:pb-6">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-accent">
                  {lead.category}
                </p>
                <p className="mt-2 font-display text-3xl leading-none text-text sm:text-4xl">
                  {lead.alt}
                </p>
              </div>
            </div>
          </article>

          {!hasSingleImage && (
            <div
              className={`grid gap-5 ${
                hasTwoImages ? "" : "sm:grid-cols-2 lg:grid-cols-1"
              } lg:gap-8`}
            >
              {supporting.map((image, index) => (
                <article
                  key={image.id}
                  className="group relative overflow-hidden"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                      hasTwoImages
                        ? "h-[26rem] sm:h-[34rem] lg:h-[42rem]"
                        : "h-[22rem] sm:h-[24rem] lg:h-[19.75rem]"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/15 to-transparent px-4 pb-4 pt-10">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.34em] text-accent">
                        {image.category}
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-text/82">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
