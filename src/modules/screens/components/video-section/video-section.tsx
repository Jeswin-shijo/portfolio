import { useEffect, useRef, useState, type ChangeEvent } from "react";
import heroVideo from "../../../../assets/background/back.mp4";
import "./video-section.css";

type VideoSectionProps = {
  src?: string;
  poster?: string;
  containerClassName?: string;
};

const defaultContainerClassName =
  "col-lg-12 col-md-12 col-12 col-xl-12 col-xxl-6 text-center position-relative";

const formatTime = (value: number) => {
  if (!Number.isFinite(value) || value < 0) {
    return "0:00";
  }

  const totalSeconds = Math.floor(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};

const VideoSection = ({
  src = heroVideo,
  poster = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80",
  containerClassName = defaultContainerClassName,
}: VideoSectionProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const previousVolumeRef = useRef(1);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === frameRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    setIsPlaying(false);
    setHasStarted(false);
    setCurrentTime(0);
    setDuration(0);
    setVolume(1);
    setIsMuted(false);
    previousVolumeRef.current = 1;
  }, [src, poster]);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      setHasStarted(true);
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    videoRef.current?.pause();
  };

  const handlePlayPause = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      await handlePlay();
      return;
    }

    handlePause();
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const nextTime = Number(event.target.value);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const nextVolume = Number(event.target.value);
    video.volume = nextVolume;
    video.muted = nextVolume === 0;
    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);

    if (nextVolume > 0) {
      previousVolumeRef.current = nextVolume;
    }
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted || video.volume === 0) {
      const restoredVolume = previousVolumeRef.current || 1;
      video.muted = false;
      video.volume = restoredVolume;
      setVolume(restoredVolume);
      setIsMuted(false);
      return;
    }

    previousVolumeRef.current = video.volume || previousVolumeRef.current;
    video.muted = true;
    setIsMuted(true);
    setVolume(0);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    setCurrentTime(0);
  };

  const handleFullscreenToggle = async () => {
    const frame = frameRef.current;
    if (!frame) return;

    try {
      if (document.fullscreenElement === frame) {
        await document.exitFullscreen();
        return;
      }

      await frame.requestFullscreen();
    } catch {
      setIsFullscreen(false);
    }
  };

  const volumeIcon = () => {
    if (isMuted || volume === 0) {
      return "bi-volume-mute-fill";
    }

    if (volume < 0.5) {
      return "bi-volume-down-fill";
    }

    return "bi-volume-up-fill";
  };

  return (
    <div className={containerClassName}>
      <div ref={frameRef} className="video-section__frame">
        <video
          ref={videoRef}
          className="video-section__media"
          poster={poster}
          src={src}
          playsInline
          preload="metadata"
          onClick={handlePlayPause}
          onLoadedMetadata={(event) => {
            setDuration(event.currentTarget.duration || 0);
          }}
          onTimeUpdate={(event) => {
            setCurrentTime(event.currentTarget.currentTime);
          }}
          onPlay={() => {
            setIsPlaying(true);
            setHasStarted(true);
          }}
          onPause={() => setIsPlaying(false)}
          onVolumeChange={(event) => {
            setVolume(event.currentTarget.muted ? 0 : event.currentTarget.volume);
            setIsMuted(event.currentTarget.muted || event.currentTarget.volume === 0);
          }}
          onEnded={() => {
            setIsPlaying(false);
            setCurrentTime(0);
          }}
        />

        <div className="video-section__shade" aria-hidden="true" />

        {!hasStarted && !isPlaying ? (
          <button
            type="button"
            className="video-section__play-overlay"
            onClick={handlePlayPause}
            aria-label="Play video"
          >
            <span className="video-section__play-core" aria-hidden="true">
              <i className="bi bi-play-fill"></i>
            </span>
          </button>
        ) : null}

        <div className="video-section__controls">
          <div className="video-section__timeline-wrap">
            <input
              type="range"
              className="video-section__timeline"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(currentTime, duration || 0)}
              onChange={handleSeek}
              aria-label="Seek video"
            />
            <div
              className="video-section__timeline-progress"
              aria-hidden="true"
              style={{
                width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%",
              }}
            />
          </div>

          <div className="video-section__toolbar">
            <div className="video-section__group">
              <button
                type="button"
                className="video-section__control video-section__control--primary"
                onClick={handlePlayPause}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`}></i>
              </button>

              <button
                type="button"
                className="video-section__control"
                onClick={handleRestart}
                aria-label="Restart video"
              >
                <i className="bi bi-arrow-counterclockwise"></i>
              </button>

              <span className="video-section__time">
                {formatTime(currentTime)}
                <span> / {formatTime(duration)}</span>
              </span>
            </div>

            <div className="video-section__group video-section__group--right">
              <button
                type="button"
                className="video-section__control"
                onClick={handleMuteToggle}
                aria-label={isMuted || volume === 0 ? "Unmute video" : "Mute video"}
              >
                <i className={`bi ${volumeIcon()}`}></i>
              </button>

              <input
                type="range"
                className="video-section__volume"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={handleVolumeChange}
                aria-label="Adjust volume"
              />

              <button
                type="button"
                className="video-section__control"
                onClick={handleFullscreenToggle}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                <i
                  className={`bi ${
                    isFullscreen ? "bi-fullscreen-exit" : "bi-arrows-fullscreen"
                  }`}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
