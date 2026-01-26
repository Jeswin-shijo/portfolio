import React, { useMemo, useState } from "react";
import "./gallery-view-page.css";

type MosaicImage = {
  src: string;
  alt: string;
};

const TOTAL_PAGES = 4;

// Demo images (replace with your own)
const demoPages: MosaicImage[][] = [
  [
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=70",
      alt: "Nature stay near lake",
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=70",
      alt: "Boats on blue lake",
    },
    {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=70",
      alt: "Wooden villa",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=70",
      alt: "Green lake view",
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=70",
      alt: "Island resort at night",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=70",
      alt: "Wetlands aerial",
    },
  ],
  // You can replace these pages with real ones
  ...Array.from({ length: 3 }).map(() => [
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=70",
      alt: "Wetlands aerial",
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=70",
      alt: "Blue lake boats",
    },
    {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=70",
      alt: "Wooden villa",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=70",
      alt: "Forest lake",
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=70",
      alt: "Cabin view",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=70",
      alt: "Aerial wetlands",
    },
  ]),
];

const positions = ["a", "b", "c", "d", "e", "f"] as const;

function MosaicTile({
  src,
  alt,
  pos,
}: {
  src: string;
  alt: string;
  pos: (typeof positions)[number];
}) {
  return (
    <div className={`mosaic-tile mosaic-tile--${pos}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

const GalleryViewPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const images = useMemo(() => {
    const pageIndex = Math.max(0, Math.min(TOTAL_PAGES - 1, page - 1));
    return demoPages[pageIndex] ?? [];
  }, [page]);

  const canPrev = page > 1;
  const canNext = page < TOTAL_PAGES;

  return (
    <main className="galleryview-page">
      {/* Full width, centered content like your design */}
      <div className=" galleryview-container">
        <div className="galleryview-inner">
          {/* Mosaic grid */}
          <section className="mosaic-grid" aria-label="Gallery mosaic">
            {positions.map((pos, idx) => {
              const img = images[idx];
              if (!img) return null;
              return (
                <MosaicTile key={pos} pos={pos} src={img.src} alt={img.alt} />
              );
            })}
          </section>

          {/* Pagination (bottom-left like screenshot) */}
          <div className="mosaic-pager">
            <div className="mosaic-count">
              <div className="mosaic-current">{page}</div>
              <div className="mosaic-total">/{TOTAL_PAGES}</div>
            </div>

            <div className="mosaic-divider" />

            <div className="mosaic-actions">
              <button
                type="button"
                className="mosaic-btn mosaic-btn--prev"
                onClick={() => canPrev && setPage((p) => p - 1)}
                disabled={!canPrev}
                aria-label="Previous"
              >
                ←
              </button>

              <button
                type="button"
                className="mosaic-btn mosaic-btn--next"
                onClick={() => canNext && setPage((p) => p + 1)}
                disabled={!canNext}
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryViewPage;
