import React, { useEffect, useMemo, useState } from "react";
import "./gallery-view-page.css";

type MosaicImage = {
  src: string;
  alt: string;
};

const positions = ["a", "b", "c", "d", "e", "f"] as const;
const IMAGES_PER_PAGE = positions.length;

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

type GalleryViewPageProps = {
  albumTitle: string;
  images: string[];
  onBack?: () => void;
};

const GalleryViewPage: React.FC<GalleryViewPageProps> = ({
  albumTitle,
  images,
  onBack,
}) => {
  const [page, setPage] = useState(1);

  const pages = useMemo(() => {
    const safeImages = images.filter(Boolean).map((src, index) => ({
      src,
      alt: `${albumTitle} image ${index + 1}`,
    }));

    const chunked: MosaicImage[][] = [];
    for (let i = 0; i < safeImages.length; i += IMAGES_PER_PAGE) {
      chunked.push(safeImages.slice(i, i + IMAGES_PER_PAGE));
    }
    return chunked.length > 0 ? chunked : [[]];
  }, [albumTitle, images]);

  const totalPages = pages.length;

  const pageImages = useMemo(() => {
    const pageIndex = Math.max(0, Math.min(totalPages - 1, page - 1));
    return pages[pageIndex] ?? [];
  }, [page, pages, totalPages]);

  useEffect(() => {
    setPage(1);
  }, [albumTitle, images]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <main className="galleryview-page">
      {/* Full width, centered content like your design */}
      <div className=" galleryview-container">
        <div className="galleryview-inner">
          <header className="galleryview-header">
            <button
              type="button"
              className="galleryview-back-btn"
              onClick={onBack}
              aria-label="Back to gallery albums"
            >
              ← Back
            </button>
            <h2 className="galleryview-title">{albumTitle}</h2>
          </header>

          {/* Mosaic grid */}
          <section className="mosaic-grid" aria-label="Gallery mosaic">
            {positions.map((pos, idx) => {
              const img = pageImages[idx];
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
              <div className="mosaic-total">/{totalPages}</div>
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
