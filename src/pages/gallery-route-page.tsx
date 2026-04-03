import { useState } from "react";
import GalleryPage, {
  type Album as GalleryAlbum,
} from "../modules/screens/gallery-page-screen/gallery-man-screen";
import GalleryViewPage from "../modules/screens/gallery-page-screen/sub-screen/gallery-view-page";
import FooterScreen from "../modules/screens/footer-screen";
import PageHero from "../shared/components/page-hero/page-hero";

const GalleryRoutePage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<GalleryAlbum | null>(null);

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
        <GalleryPage onAlbumSelect={setSelectedAlbum} />
      ) : (
        <GalleryViewPage
          albumTitle={selectedAlbum.title}
          images={selectedAlbum.images}
          onBack={() => setSelectedAlbum(null)}
        />
      )}
      <FooterScreen />
    </>
  );
};

export default GalleryRoutePage;
