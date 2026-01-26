import React from "react";

const GalleryAlbumCard = ({ title, count = 12, images = [] }: any) => {
  const [main, top, bottom] = images;

  return (
    <div className="album-card">
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
    </div>
  );
}

export default GalleryAlbumCard;