import React from "react";
import GalleryAlbumCard from "../../../shared/components/gallery-album-card";
import "./gallery-page.css";

// Replace these with your own images (local assets or CDN)
const IMG_MAIN =
  "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1200&q=70";
const IMG_TOP =
  "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=70";
const IMG_BOTTOM =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=70";

export type Album = {
  title: string;
  count: number;
  images: string[];
};

const createAlbumImages = (seed: string): string[] =>
  [
    IMG_MAIN,
    IMG_TOP,
    IMG_BOTTOM,
    ...Array.from({ length: 9 }).map(
      (_, index) =>
        `https://picsum.photos/seed/${seed}-${index + 1}/1400/900`
    ),
  ];

const albums: Album[] = [
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
      <div className="p-5 gallery-container">
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
            <div className="col-12 col-sm-6 col-lg-4 col-xxl-3" key={a.title}>
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
