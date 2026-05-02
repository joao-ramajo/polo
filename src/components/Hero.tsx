import type { Artist, TattooImage } from "../types/portfolio";

type HeroProps = {
  artist: Artist;
  featuredImage?: TattooImage;
};

export function Hero({ artist, featuredImage }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-site">
        <div className="grid min-h-[88vh] items-end gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(22rem,0.45fr)] lg:gap-6">
          <div className="relative z-10 max-w-3xl animate-fade-up pb-4 lg:pb-12">
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

          <div className="relative animate-fade-up [animation-delay:140ms]">
            <div className="absolute inset-x-10 top-12 h-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
            <div className="relative ml-auto w-full max-w-[30rem]">
              <img
                src={featuredImage?.src}
                alt={featuredImage?.alt ?? artist.name}
                className="h-[28rem] w-full object-cover object-center transition duration-700 hover:scale-[1.02] sm:h-[38rem] lg:h-[44rem]"
                loading="eager"
              />
              <div className="absolute -bottom-8 -left-6 hidden max-w-[13rem] bg-background/95 p-4 backdrop-blur lg:block">
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-accent">
                  Em foco
                </p>
                <p className="mt-2 font-display text-2xl leading-none text-text">
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
