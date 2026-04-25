import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./photo-gallery-modal.css";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const focusFirst = () => {
      const shell = shellRef.current;
      if (!shell) return;
      const focusables = shell.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      focusables[0]?.focus();
    };

    const rafId = requestAnimationFrame(focusFirst);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        onSelect((activeIndex + 1) % images.length);
        return;
      }

      if (event.key === "ArrowLeft") {
        onSelect((activeIndex - 1 + images.length) % images.length);
        return;
      }

      if (event.key !== "Tab") return;
      const shell = shellRef.current;
      if (!shell) return;
      const focusables = Array.from(
        shell.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((node) => !node.hasAttribute("data-focus-skip"));
      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (event.shiftKey && (active === first || !shell.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
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
        data-focus-skip="true"
        tabIndex={-1}
      />

      <div className="photo-gallery-modal__shell" ref={shellRef}>
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
