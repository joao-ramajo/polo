import { AboutArtist } from "./components/AboutArtist";
import { CallToAction } from "./components/CallToAction";
import { FeaturedGallery } from "./components/FeaturedGallery";
import { Footer } from "./components/Footer";
import { GalleryGrid } from "./components/GalleryGrid";
import { Hero } from "./components/Hero";
import { artist } from "./data/artist";
import { gallery } from "./data/gallery";
import { getFeaturedImages, getGalleryImages } from "./utils/gallery";

function App() {
  const featuredImages = getFeaturedImages(gallery);
  const galleryImages = getGalleryImages(gallery);
  const heroImage = featuredImages[0] ?? galleryImages[0];

  return (
    <div className="relative min-h-screen bg-background text-text">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-8rem] top-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[28rem] h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
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

export default App;
