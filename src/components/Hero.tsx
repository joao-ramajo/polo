import type { Artist, TattooImage } from "../types/portfolio";

type HeroProps = {
  artist: Artist;
  featuredImage?: TattooImage;
};

export function Hero({ artist, featuredImage }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-4 lg:pb-20">
      <div className="mx-auto max-w-[1680px]">
        <div className="grid min-h-[90vh] items-stretch gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-10">
          <div className="relative z-10 flex items-end px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-fade-up pb-6 lg:pb-10">
              <p className="mb-5 text-[0.7rem] uppercase tracking-[0.42em] text-accent">
                {artist.location}
              </p>
              <h1 className="max-w-2xl font-display text-6xl leading-[0.88] text-text sm:text-7xl lg:text-[7.5rem]">
                {artist.name}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-text/70 sm:text-lg">
                {artist.headline}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm uppercase tracking-[0.28em] text-text/82">
                <a
                  href={artist.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition duration-300 hover:text-accent"
                >
                  <span className="h-px w-8 bg-accent" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={artist.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition duration-300 hover:text-accent"
                >
                  <span className="h-px w-8 bg-accent" aria-hidden="true" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:140ms]">
            <div
              className="absolute inset-x-10 top-12 h-64 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="group relative h-[70vh] overflow-hidden sm:h-[78vh] lg:h-[92vh]">
              <img
                src={featuredImage?.src}
                alt={featuredImage?.alt ?? artist.name}
                className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 w-full px-4 pb-5 pt-16 sm:px-6 sm:pb-6 lg:max-w-[18rem] lg:px-8 lg:pb-8">
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-accent">
                  Em foco
                </p>
                <p className="mt-3 font-display text-3xl leading-none text-text lg:text-4xl">
                  {featuredImage?.category ?? "Autoral"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
