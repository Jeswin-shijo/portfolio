import React from "react";
import GalleryAlbumCard from "../../../shared/components/gallery-album-card";
import "./gallery-page.css";

export type Album = {
  title: string;
  count: number;
  images: string[];
};

const albumImageSets: Record<string, string[]> = {
  bali: [
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
  ],
  wayanad: [
    "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
  ],
  kodaikanal: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
  ],
  munnar: [
    "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  ],
  "sri-lanka": [
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
  ],
  thailand: [
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  ],
  manali: [
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  ],
  ooty: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
  ],
  alappuzha: [
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  ],
};

const createAlbumImages = (seed: string): string[] => [
  ...(albumImageSets[seed] || albumImageSets.ooty),
  ...Array.from(
    { length: 9 },
    (_, index) => `https://picsum.photos/seed/${seed}-${index + 1}/1400/900`
  ),
];

export const albums: Album[] = [
  { title: "Bali", count: 12, images: createAlbumImages("bali") },
  { title: "Wayanad", count: 12, images: createAlbumImages("wayanad") },
  { title: "Kodaikanal", count: 12, images: createAlbumImages("kodaikanal") },
  { title: "Munnar", count: 12, images: createAlbumImages("munnar") },
  { title: "Sri Lanka", count: 12, images: createAlbumImages("sri-lanka") },
  { title: "Thailand", count: 12, images: createAlbumImages("thailand") },
  { title: "Manali", count: 12, images: createAlbumImages("manali") },
  { title: "Ooty", count: 12, images: createAlbumImages("ooty") },
  { title: "Alappuzha", count: 12, images: createAlbumImages("alappuzha") },
];

type GalleryPageProps = {
  onAlbumSelect?: (album: Album) => void;
};

const GalleryPage: React.FC<GalleryPageProps> = ({ onAlbumSelect }) => {
  return (
    <main className="gallery-page">
      <div className="site-container gallery-container">
        <header className="gallery-header">
          <h1 className="gallery-heading">Moments That Inspire Journeys</h1>
          <p className="gallery-lede">
            Travel is all about experiences, memories, and breathtaking views. Our
            gallery showcases the most loved moments from across the globe — from
            serene beaches and misty mountains to vibrant cities and cultural wonders
          </p>
        </header>

        <div className="row g-4 g-lg-5">
          {albums.map((a) => (
            <div className="col-12 col-sm-6 col-lg-4" key={a.title}>
              <GalleryAlbumCard
                title={a.title}
                count={a.count}
                images={a.images.slice(0, 3)}
                onClick={() => onAlbumSelect?.(a)}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
