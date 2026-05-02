import type { Artist } from "../types/portfolio";

type CallToActionProps = {
  artist: Artist;
};

export function CallToAction({ artist }: CallToActionProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-site">
        <div className="border-t border-white/10 pt-10">
          <div className="max-w-4xl">
            <p className="text-[0.68rem] uppercase tracking-[0.4em] text-accent">
              Agenda aberta
            </p>
            <h2 className="mt-4 font-display text-4xl leading-none text-text sm:text-5xl lg:text-6xl">
              Agendamentos e conversas direto no privado.
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm uppercase tracking-[0.3em] text-text/82">
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
      </div>
    </section>
  );
}
