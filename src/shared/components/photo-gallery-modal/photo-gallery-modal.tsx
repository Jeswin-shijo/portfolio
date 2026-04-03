import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./photo-gallery-modal.css";

type PhotoGalleryModalProps = {
  isOpen: boolean;
  title: string;
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
};

const PhotoGalleryModal = ({
  isOpen,
  title,
  images,
  activeIndex,
  onClose,
  onSelect,
}: PhotoGalleryModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onSelect((activeIndex + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        onSelect((activeIndex - 1 + images.length) % images.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length, isOpen, onClose, onSelect]);

  if (!isOpen || images.length === 0) {
    return null;
  }

  const currentImage = images[activeIndex] ?? images[0];

  return createPortal(
    <div
      className="photo-gallery-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo gallery`}
    >
      <button
        type="button"
        className="photo-gallery-modal__backdrop"
        aria-label="Close gallery"
        onClick={onClose}
      />

      <div className="photo-gallery-modal__shell">
        <div className="photo-gallery-modal__header">
          <div>
            <p className="photo-gallery-modal__eyebrow">Photo Gallery</p>
            <h3>{title}</h3>
            <span>
              {activeIndex + 1} / {images.length}
            </span>
          </div>

          <button
            type="button"
            className="photo-gallery-modal__close"
            aria-label="Close photo gallery"
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="photo-gallery-modal__stage">
          <button
            type="button"
            className="photo-gallery-modal__nav"
            aria-label="Previous photo"
            onClick={() => onSelect((activeIndex - 1 + images.length) % images.length)}
          >
            <i className="bi bi-arrow-left"></i>
          </button>

          <div className="photo-gallery-modal__figure">
            <img
              src={currentImage}
              alt={`${title} gallery view ${activeIndex + 1}`}
            />
          </div>

          <button
            type="button"
            className="photo-gallery-modal__nav"
            aria-label="Next photo"
            onClick={() => onSelect((activeIndex + 1) % images.length)}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div className="photo-gallery-modal__thumbs" aria-label="Gallery thumbnails">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`photo-gallery-modal__thumb ${
                index === activeIndex ? "is-active" : ""
              }`}
              aria-label={`Open photo ${index + 1}`}
              onClick={() => onSelect(index)}
            >
              <img src={image} alt={`${title} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PhotoGalleryModal;
