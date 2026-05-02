import { artist } from "../data/artist";
import { gallery } from "../data/gallery";
import { type ThemePreset, getThemeCssVariables } from "../themes";
import { getFeaturedImages, getGalleryImages } from "../utils/gallery";
import { AboutArtist } from "./AboutArtist";
import { CallToAction } from "./CallToAction";
import { FeaturedGallery } from "./FeaturedGallery";
import { Footer } from "./Footer";
import { GalleryGrid } from "./GalleryGrid";
import { Hero } from "./Hero";

type PortfolioPageProps = {
  theme: ThemePreset;
};

export function PortfolioPage({ theme }: PortfolioPageProps) {
  const featuredImages = getFeaturedImages(gallery);
  const galleryImages = getGalleryImages(gallery);
  const heroImage = featuredImages[0] ?? galleryImages[0];
  const themeStyle = getThemeCssVariables(theme);

  return (
    <div
      className={`relative min-h-screen bg-background text-text ${theme.rootClassName}`}
      style={{
        ...themeStyle,
        background: theme.effects.pageBackground,
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-[-8rem] top-0 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: theme.effects.ambientOne }}
        />
        <div
          className="absolute right-[-10rem] top-[28rem] h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: theme.effects.ambientTwo }}
        />
        <div
          className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: theme.effects.ambientThree }}
        />
      </div>

      <main className="relative">
        <Hero artist={artist} featuredImage={heroImage} />
        <FeaturedGallery images={featuredImages} />
        <GalleryGrid images={galleryImages} />
        <AboutArtist artist={artist} />
        <CallToAction artist={artist} />
      </main>
      <Footer artistName={artist.name} />
    </div>
  );
}
