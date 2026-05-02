import type { Artist } from "../types/portfolio";

type AboutArtistProps = {
  artist: Artist;
};

export function AboutArtist({ artist }: AboutArtistProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-site">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <div className="max-w-xs">
            <p className="text-[0.68rem] uppercase tracking-[0.4em] text-accent">
              Sobre
            </p>
            <h2 className="mt-3 font-display text-4xl leading-none text-text sm:text-5xl">
              {artist.name}
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="font-display text-3xl leading-[1.15] text-text/90 sm:text-4xl lg:text-[3.25rem]">
              {artist.bio}
            </p>
            <p className="mt-8 text-[0.72rem] uppercase tracking-[0.38em] text-muted">
              {artist.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
