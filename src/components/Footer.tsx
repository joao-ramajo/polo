type FooterProps = {
  artistName: string;
};

export function Footer({ artistName }: FooterProps) {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-site flex-col gap-3 pt-6 text-[0.68rem] uppercase tracking-[0.34em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{artistName}</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
