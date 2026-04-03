import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import "./share-popup.css";

type SharePopupProps = {
  title: string;
  text: string;
  buttonLabel?: string;
  buttonClassName?: string;
  className?: string;
};

type ShareAction =
  | {
      key: string;
      label: string;
      note: string;
      icon: string;
      kind: "button";
      onClick: () => void;
    }
  | {
      key: string;
      label: string;
      note: string;
      icon: string;
      kind: "link";
      href: string;
      external?: boolean;
    };

const copyText = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  }
};

const SharePopup = ({
  title,
  text,
  buttonLabel = "Share",
  buttonClassName,
  className,
}: SharePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelId = useId();
  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const canUseNativeShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!status) return;

    const timeoutId = window.setTimeout(() => {
      setStatus(null);
    }, 2400);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleCopyLink = async () => {
    const copied = await copyText(shareUrl);
    setStatus(copied ? "Link copied to clipboard" : "Unable to copy link");
  };

  const handleNativeShare = async () => {
    if (!canUseNativeShare) {
      await handleCopyLink();
      return;
    }

    try {
      await navigator.share({
        title,
        text,
        url: shareUrl,
      });
      setIsOpen(false);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setStatus("Unable to open share options");
    }
  };

  const shareActions: ShareAction[] = [
    {
      key: "copy",
      label: "Copy link",
      note: "Grab the package URL instantly",
      icon: "bi-link-45deg",
      kind: "button",
      onClick: handleCopyLink,
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      note: "Send it in one tap",
      icon: "bi-whatsapp",
      kind: "link",
      href: `https://wa.me/?text=${encodeURIComponent(
        `${text}\n${shareUrl}`
      )}`,
      external: true,
    },
    {
      key: "email",
      label: "Email",
      note: "Share it with trip details",
      icon: "bi-envelope-paper",
      kind: "link",
      href: `mailto:?subject=${encodeURIComponent(
        title
      )}&body=${encodeURIComponent(`${text}\n\n${shareUrl}`)}`,
    },
  ];

  if (canUseNativeShare) {
    shareActions.push({
      key: "native",
      label: "More options",
      note: "Open your device share sheet",
      icon: "bi-box-arrow-up-right",
      kind: "button",
      onClick: handleNativeShare,
    });
  }

  const rootClassName = ["share-popup", className, isOpen ? "is-open" : ""]
    .filter(Boolean)
    .join(" ");
  const triggerClassName = ["share-popup__trigger", buttonClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={containerRef} className={rootClassName}>
      <button
        type="button"
        className={triggerClassName}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span>{buttonLabel}</span>
        <span className="share-popup__trigger-icon" aria-hidden="true">
          <i className="bi bi-share-fill"></i>
        </span>
      </button>

      <div
        id={panelId}
        className="share-popup__panel"
        role="dialog"
        aria-label="Share package options"
        aria-hidden={!isOpen}
      >
        <div className="share-popup__panel-header">
          <div>
            <p className="share-popup__eyebrow">Share this trip</p>
            <h3 className="share-popup__title">{title}</h3>
          </div>
          <button
            type="button"
            className="share-popup__close"
            aria-label="Close share popup"
            onClick={() => setIsOpen(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <p className="share-popup__description">
          Send this package quickly through the option that feels best.
        </p>

        <div className="share-popup__grid">
          {shareActions.map((action, index) => {
            const itemStyle = {
              ["--share-index" as string]: index,
            } as CSSProperties;

            if (action.kind === "link") {
              return (
                <a
                  key={action.key}
                  className="share-popup__action"
                  href={action.href}
                  style={itemStyle}
                  onClick={() => setIsOpen(false)}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                >
                  <span className="share-popup__action-icon" aria-hidden="true">
                    <i className={`bi ${action.icon}`}></i>
                  </span>
                  <span className="share-popup__action-label">
                    {action.label}
                  </span>
                  <span className="share-popup__action-note">
                    {action.note}
                  </span>
                </a>
              );
            }

            return (
              <button
                key={action.key}
                type="button"
                className="share-popup__action"
                style={itemStyle}
                onClick={action.onClick}
              >
                <span className="share-popup__action-icon" aria-hidden="true">
                  <i className={`bi ${action.icon}`}></i>
                </span>
                <span className="share-popup__action-label">
                  {action.label}
                </span>
                <span className="share-popup__action-note">{action.note}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
