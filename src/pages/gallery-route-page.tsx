import { useEffect, useState } from "react";
import GalleryPage, {
  type Album as GalleryAlbum,
  albums as galleryAlbums,
} from "../modules/screens/gallery-page-screen/gallery-man-screen";
import GalleryViewPage from "../modules/screens/gallery-page-screen/sub-screen/gallery-view-page";
import FooterScreen from "../modules/screens/footer-screen";
import PageHero from "../shared/components/page-hero/page-hero";
import { navigateTo } from "../shared/navigation/site-navigation";

const slugify = (value: string) =>
  value.toLowerCase().replace(/\s+/g, "-").trim();

const findAlbumBySlug = (slug: string | null): GalleryAlbum | null => {
  if (!slug) return null;
  const normalized = slugify(slug);
  return (
    galleryAlbums.find((album) => slugify(album.title) === normalized) ?? null
  );
};

const readAlbumSlugFromUrl = (): string | null => {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("album");
};

const GalleryRoutePage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<GalleryAlbum | null>(() =>
    findAlbumBySlug(readAlbumSlugFromUrl())
  );

  useEffect(() => {
    const sync = () => {
      setSelectedAlbum(findAlbumBySlug(readAlbumSlugFromUrl()));
    };

    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  const handleSelect = (album: GalleryAlbum) => {
    setSelectedAlbum(album);
    navigateTo(`/gallery?album=${slugify(album.title)}`, { replace: true });
  };

  const handleBack = () => {
    setSelectedAlbum(null);
    navigateTo("/gallery", { replace: true });
  };

  return (
    <>
      <PageHero
        title={selectedAlbum ? selectedAlbum.title : "Travel Gallery"}
        subtitle={
          selectedAlbum
            ? "A closer look at the scenes, stays, and landscapes our travelers remember most."
            : "Browse destination albums filled with unforgettable stays, coastlines, hills, and hidden corners."
        }
        backgroundImage='url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80")'
        activeNav="gallery"
      />
      {!selectedAlbum ? (
        <GalleryPage onAlbumSelect={handleSelect} />
      ) : (
        <GalleryViewPage
          albumTitle={selectedAlbum.title}
          images={selectedAlbum.images}
          onBack={handleBack}
        />
      )}
      <FooterScreen />
    </>
  );
};

export default GalleryRoutePage;
