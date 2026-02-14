import React from "react";

type GalleryAlbumCardProps = {
  title: string;
  count?: number;
  images: string[];
  onClick?: () => void;
};

const GalleryAlbumCard = ({
  title,
  count = 12,
  images = [],
  onClick,
}: GalleryAlbumCardProps) => {
  const [main, top, bottom] = images;
  const content = (
    <>
      <div className="album-collage" aria-label={`${title} album`}>
        <div className="album-img album-img--main">
          <img src={main} alt={`${title} cover`} loading="lazy" />
        </div>

        <div className="album-img album-img--side">
          <img src={top} alt={`${title} preview 1`} loading="lazy" />
        </div>

        <div className="album-img album-img--side">
          <img src={bottom} alt={`${title} preview 2`} loading="lazy" />
        </div>
      </div>

      <div className="mt-3">
        <div className="album-title">{title}</div>
        <div className="album-sub">{count} Photos</div>
      </div>
    </>
  );

  if (!onClick) {
    return <div className="album-card">{content}</div>;
  }

  return (
    <button
      type="button"
      className="album-card album-card-btn"
      onClick={onClick}
      aria-label={`Open ${title} album`}
    >
      {content}
    </button>
  );
};

export default GalleryAlbumCard;
